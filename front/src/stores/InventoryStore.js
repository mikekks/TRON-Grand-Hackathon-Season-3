import create from 'zustand';

const useInventoryStore = create(set => ({
    InventoryState: "initmush",
    ChangeInventoryState: (InventoryState) => set({InventoryState}),
}))

export default useInventoryStore;