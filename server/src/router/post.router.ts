import express from 'express';
import { getAllPostHandler, createPostHandler, deletePostHandler } from '../controller/post.controller'

const router = express.Router();

router.get('/all', getAllPostHandler);
router.post('/create', createPostHandler);
router.delete('/delete/:postId', deletePostHandler)

export default router;