import create from 'zustand';

const usePinStore = create(set => ({
    pinNumber: "",
    PinCreated: () => set(state => ({ pinNumber: state.pinNumber })),
}))

export default usePinStore;