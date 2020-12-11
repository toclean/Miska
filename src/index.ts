import { Client } from 'discord.js';
import Miska from './Miska';

const miska = new Miska();

miska.run().catch((error) => console.error(error));