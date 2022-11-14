import create from 'zustand';

const useMushStore = create(set => ({
    
    MushOne: "adult2",
    MushOneEXP: 0,
    MushOneNameChange: (MushOne) => set({MushOne}),
    MushOneEXPChange: () => set((state) => ({MushOneEXP: state.MushOneEXP + 1})),
    MushOneEXPInit: () => set(() => ({MushOneEXP: 0})),

    MushTwo: "hole",
    MushTwoEXP: 0,
    MushTwoNameChange: (MushTwo) => set({MushTwo}),
    MushTwoEXPChange: () => set((state) => ({MushTwoEXP: state.MushTwoEXP + 1})),
    MushTwoEXPInit: () => set(() => ({MushTwoEXP: 0})),

    MushThree: "hole",
    MushThreeEXP: 0,
    MushThreeNameChange: (MushThree) => set({MushThree}),
    MushThreeEXPChange: () => set((state) => ({MushThreeEXP: state.MushThreeEXP + 1})),
    MushThreeEXPInit: () => set(() => ({MushThreeEXP: 0})),
    
    MushFour: "hole",
    MushFourEXP: 0,
    MushFourNameChange: (MushFour) => set({MushFour}),
    MushFourEXPChange: () => set((state) => ({MushFourEXP: state.MushFourEXP + 1})),
    MushFourEXPInit: () => set(() => ({MushFourEXP: 0})),
    
    // MushFive: "hole",
    // MushFiveEXP: 0,
    // MushFiveNameChange: () => set((state) => ({MushFive: state.MushFive})),
    // MushFiveEXPChange: () => set((state) => ({MushFive: state.MushFive + 1})),
}))

export default useMushStore;