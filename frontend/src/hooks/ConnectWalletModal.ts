import { useState, useCallback } from "react";

export function useConnectWalletModal() {
    const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);

    const openConnectWallet = useCallback(() => {
        setIsConnectWalletOpen(true);
    }, [])

    const closeConnectWallet = useCallback(() => {
        setIsConnectWalletOpen(false);
    }, []);

    return {
        isConnectWalletOpen,
        openConnectWallet,
        closeConnectWallet
    };
}