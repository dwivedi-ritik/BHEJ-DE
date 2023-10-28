import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

export function generateClientName(): string {
    const customConfig: Config = {
        dictionaries: [adjectives, colors, animals],
        separator: ' ',
        length: 2,
    };

    const randomName: string = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals]
    }); // big_red_donkey

    return uniqueNamesGenerator(customConfig);
}

export function generateRoomId() {
    return Math.floor(100000 + Math.random() * 900000).toString()
}