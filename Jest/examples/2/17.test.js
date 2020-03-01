import SoundPlayer from './sound-player';
import SoundPlayerConsumer from './sound-player-consumer';

jest.mock('./sound-player');

describe('When SoundPlayer throws an error', () => {
    beforeAll(() => {
        SoundPlayer.mockImplementation(() => {
            return {
                playSoundFile: () => {
                    throw new Error('Test error');
                },
            };
        });
    });

    it('Should throw an error when calling playSomethingCool', () => {
        const soundPlayerConsumer = new SoundPlayerConsumer();
        expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
    });
});
