import dotenv from 'dotenv';

dotenv.config();

export const twitchClientId = process.env.TWITCH_CLIENT_ID;
export const twitchClientSecret = process.env.TWITCH_CLIENT_SECRET;
export const connectionString = process.env.DATABASE_URL;
