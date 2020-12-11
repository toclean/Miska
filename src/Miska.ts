import { Client, Message } from 'discord.js';

import { token } from './creds';

export default class Miska extends Client {
    private static token: string = token;

    constructor() {
        super();
    }

    async run(): Promise<Miska> {
        this.on('ready', () => { console.debug('ready...'); });
        this.on('message', (msg: Message) => { console.debug('got message: ', msg.content); });

        await this.login(Miska.token);

        return this;
    }
}