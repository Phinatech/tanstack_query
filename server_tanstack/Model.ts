import mongoose from "mongoose";

interface myData {
    myTitle?:string;
    description?:string;
}

interface PostData extends myData,mongoose.Document{}

const postSchema = new mongoose.Schema<myData>({
    myTitle:{
        type:String,
    },
    description:{
        type:String,
    }
})


export default mongoose.model<PostData>("posts", postSchema)