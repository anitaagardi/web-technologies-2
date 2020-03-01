import SoundPlayerConsumer from './sound-player-consumer';
import SoundPlayer from './sound-player';

const mockPlaySoundFile = jest.fn();
jest.mock('./sound-player', () => {
    return jest.fn().mockImplementation(() => {
        return { playSoundFile: mockPlaySoundFile };
    });
});

beforeEach(() => {
    SoundPlayer.mockClear();
    mockPlaySoundFile.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
    mockPlaySoundFile.mockImplementation(() => {
        console.log('Mock implementation run..');
    });
    const soundPlayerConsumer = new SoundPlayerConsumer();
    // Ensure constructor created the object:

    expect(soundPlayerConsumer).toBeTruthy();

});

it('We can check if the consumer called the class constructor', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
