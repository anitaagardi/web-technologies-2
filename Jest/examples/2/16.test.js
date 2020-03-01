import SoundPlayer from './sound-player';
it('test', () => {
    const mockPlaySoundFile = jest.fn();
    jest.mock('./sound-player', () => {
        return jest.fn().mockImplementation(() => {
            return { playSoundFile: mockPlaySoundFile };
        });
    });
});
