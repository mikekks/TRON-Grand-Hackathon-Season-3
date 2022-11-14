import create from 'zustand';

const useStakingStore = create(set => ({
    StakingState: "ready",
    ChangeStakingState: (StakingState) => set({StakingState}),
}))

export default useStakingStore;