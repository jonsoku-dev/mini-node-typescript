import mongoose , { Document, Schema } from 'mongoose';

export interface IPostDocument extends Document{
    title: String
    desc: String
    testMethod: () => void
}

const postSchema = new Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    }
}, {
    timestamps: true
})

const Post = mongoose.model<IPostDocument>("Post", postSchema);

postSchema.methods.testMethod = function() {
    console.log('eee')
}

export default Post;