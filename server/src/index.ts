import path from 'path';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyPaser from 'body-parser';
import postRouter from './router/post.router';
import db from './db'

dotenv.config({path: path.resolve(__dirname, "..", "..", ".env") })

const app: Express = express();

db();

app.use(cors(), bodyPaser.json());

app.use('/api/post', postRouter);

const PORT: string = process.env.SERVER_PORT || "5000";

app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT} 로 서버가 실행되고 있습니다.`)
})