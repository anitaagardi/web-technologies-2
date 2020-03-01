import SoundPlayer from './sound-player4';
const mockPlaySoundFile = jest.fn();
it('Test', () => {
    jest.mock('./sound-player4', () => {
        return jest.fn().mockImplementation(() => {
            return { playSoundFile: mockPlaySoundFile };
            // Now we can track calls to playSoundFile
        });
    });
});
