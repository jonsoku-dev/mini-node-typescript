import mongoose from 'mongoose';

export default async () => {
    try {
        const MONGO_URI = process.env.SERVER_MONGO_URI;
        if(!MONGO_URI){
            console.error("env 파일을 확인해주세요. ")
            process.exit(1);
        }
        const options = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        await mongoose.connect(MONGO_URI, options);
        console.log("😇 Connected DB!")
    } catch (error) {
        console.log("🤬 Connect Fail DB!")
    }
}