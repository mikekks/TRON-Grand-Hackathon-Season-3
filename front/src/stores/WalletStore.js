import create from 'zustand';

const useWalletStore = create(set => ({
    walletstatus: false,
    WalletCreated: () => set(() => ({ walletstatus: true })),
}))

export default useWalletStore;