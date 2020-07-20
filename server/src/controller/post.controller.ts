import { Request, Response } from 'express';
import { IResult } from '../type';
import Post from '../entity/post.entity';

export const getAllPostHandler = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();

        const result : IResult = {
            success: true,
            payload: posts
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result : IResult = {
            success : false,
            payload: null
        }
        res.status(400).json(result);
    }
}

export const createPostHandler = async (req: Request, res: Response) => {
    try {   
      
        const newUser = await Post.create(req.body);

        const result : IResult = {
            success : true,
            payload: newUser
        }

        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        const result : IResult = {
            success : false,
            payload: null
        }
        res.status(400).json(result);
    }
}

export const deletePostHandler = async (req: Request, res: Response) => {
    try {   
        let result: IResult;

        const deletedPost = await Post.findByIdAndDelete({  _id: req.params.postId  });

        if(!deletedPost) {
            result  = {
                success : true,
                payload: "포스트를 찾을 수 없습니다. "
            }
            res.status(400).json(result);
        }

        result = {
            success : true,
            payload: deletedPost
        }

        res.status(201).json(result);

    } catch (error) {
        console.log(error);
        const result : IResult = {
            success : false,
            payload: null
        }
        res.status(400).json(result);
    }
}

