// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title CipherGateAccessControl
 * @author CipherGate
 * @notice Encrypted access control layer for CipherGate using FHEVM
 */

import "@fhevm/solidity/lib/FHE.sol";

contract CipherGateAccessControl {
    /*//////////////////////////////////////////////////////////////
                                STORAGE
    //////////////////////////////////////////////////////////////*/

    // secretId => user => encrypted access flag
    mapping (uint256 => mapping (address => ebool)) internal access;

    /*//////////////////////////////////////////////////////////////
                                EVENTS
    //////////////////////////////////////////////////////////////*/

    event AccessGranted(uint256 indexed secretId, address indexed grantee);
    event AccessRevoked(uint256 indexed secretId, address indexed grantee);

    /*//////////////////////////////////////////////////////////////
                                INTERNAL API
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Grant encrypted access from a user
     */
    function _grantAccess(uint256 secretId, address user) internal {
        access[secretId] [user] = FHE.asEbool(true);
        emit AccessGranted(secretId, user);
    }

    /**
     * @notice Revoke encrypted access from a user
     */
    function _revokeAccess(uint256 secretId, address user) internal {
        access[secretId] [user] = FHE.asEbool(false);
        emit AccessRevoked(secretId, user);
    }

    /**
     * @notice Initialize encrypted access (used for the creation of secrets)
    */
    function _initAccess(uint256 secretId, address owner) internal {
        access[secretId] [owner] = FHE.asEbool(true);
        emit AccessGranted(secretId, owner);
    }

    /*//////////////////////////////////////////////////////////////
                            ENCRYPTED GATING
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Gate encrypted data using encrypted permission
     * @dev Returns encrypted zero if access is denied
     */
    function _gateEncryptedValue (
        uint256 secretId,
        address caller,
        euint32 encryptedValue
    ) internal returns (euint32) {
        ebool hasAccess = access[secretId] [caller];
        euint32 zero = FHE.asEuint32(0);

        euint32 gated = FHE.select(
            hasAccess,
            encryptedValue,
            zero
        );

        // Allow only caller to decrypt
        FHE.allow(gated, caller);

        return gated;
    }

    /*//////////////////////////////////////////////////////////////
                            VIEW HELPERS
    //////////////////////////////////////////////////////////////*/

    /** 
     * @notice Return encrypted access flag (for debugging / frontend usage)
     */
    function encryptedAccessOf(
        uint256 secretId,
        address user
    ) external view returns (ebool) {
        return access[secretId] [user];
    }
}