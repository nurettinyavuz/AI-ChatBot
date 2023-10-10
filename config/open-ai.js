import OpenAIApi from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const configuration = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default openai;