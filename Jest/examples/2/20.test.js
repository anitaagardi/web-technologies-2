import SoundPlayer from './sound-player3';
it('Test', () => {
    jest.mock('./sound-player3', () => {
        // Works and lets you check for constructor calls:
        return jest.fn().mockImplementation(() => {
            return { playSoundFile: () => { } };
        });
    });
    let soundplayer = new SoundPlayer();
    soundplayer.playSoundFile();
});
