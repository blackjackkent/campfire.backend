import dotenv from 'dotenv';

dotenv.config();

export default { testEnvironmentVariable: process.env.TEST_ENV_VARIABLE };
