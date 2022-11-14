import create from 'zustand';

const useSporeStore = create(set => ({
    SporeState: false,
    ChangeSporeState: () => set(state => ({ SporeState: !state.SporeState })),
}))

export default useSporeStore;