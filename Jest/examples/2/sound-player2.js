// Import this named export into your test file:
export const mockPlaySoundFile = jest.fn();
const mock = jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile };
});

export default mock;
