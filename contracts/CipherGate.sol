// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title CipherGate
 * @author CipherGate
 * @notice Privacy-first access control for on-chain secrets using Zama FHEVM
 */

import "@fhevm/solidity/lib/FHE.sol";

import "./CipherGateAccessControl.sol";

contract CipherGate is CipherGateAccessControl {
    /*//////////////////////////////////////////////////////////////
                                TYPES
    //////////////////////////////////////////////////////////////*/

    struct Secret {
        address owner;
        euint32 encryptedData; // encrypted secret payload
        bool exists;
    }

    /*//////////////////////////////////////////////////////////////
                                STORAGE
    //////////////////////////////////////////////////////////////*/

    // secretId => Secret
    mapping(uint256 => Secret) private secrets;

    

    uint256 public nextSecretId;

    /*//////////////////////////////////////////////////////////////
                                EVENTS
    //////////////////////////////////////////////////////////////*/

    event SecretCreated(uint256 indexed secretId, address indexed owner);
    

    /*//////////////////////////////////////////////////////////////
                                ERRORS
    //////////////////////////////////////////////////////////////*/

    error SecretDoesNotExist();
    error NotSecretOwner();

    /*//////////////////////////////////////////////////////////////
                                MODIFIERS
    //////////////////////////////////////////////////////////////*/

    modifier onlySecretOwner(uint256 secretId) {
        if (!secrets[secretId].exists) revert SecretDoesNotExist();
        if (secrets[secretId].owner != msg.sender) revert NotSecretOwner();
        _;
    }

    /*//////////////////////////////////////////////////////////////
                            CORE FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Create a new encrypted secret
     * @param encryptedData Encrypted secret value (client-side encrypted)
     */
    function createSecret(euint32 encryptedData) external returns (uint256) {
        uint256 secretId = nextSecretId++;

        secrets[secretId] = Secret({
            owner: msg.sender,
            encryptedData: encryptedData,
            exists: true
        });

        // Grant owner encrypted access
        _initAccess(secretId, msg.sender);

        emit SecretCreated(secretId, msg.sender);
        return secretId;
    }

    /**
     * @notice Grant access to a user (encrypted permission)
     */
    function grantAccess(
        uint256 secretId,
        address grantee
    ) internal onlySecretOwner(secretId) {
        _grantAccess(secretId, grantee);
        emit AccessGranted(secretId, grantee);
    }

    /**
     * @notice Revoke access from a user (encrypted permission)
     */
    function revokeAccess(
        uint256 secretId,
        address grantee
    ) internal onlySecretOwner(secretId) {
        _revokeAccess(secretId, grantee);
        emit AccessRevoked(secretId, grantee);
    }

    /**
     * @notice Reveal encrypted secret gated by encrypted access control
     * @dev No branching or reverting on encrypted values
     */
    function revealSecret(uint256 secretId) external returns (euint32) {
        if (!secrets[secretId].exists) revert SecretDoesNotExist();

        Secret storage secret = secrets[secretId];

        return _gateEncryptedValue(
            secretId,
            msg.sender,
            secret.encryptedData
        );

    }

    /*//////////////////////////////////////////////////////////////
                            VIEW HELPERS
    //////////////////////////////////////////////////////////////*/

    function secretOwner(uint256 secretId) external view returns (address) {
        if (!secrets[secretId].exists) revert SecretDoesNotExist();
        return secrets[secretId].owner;
    }
}
