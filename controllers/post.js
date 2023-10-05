const post = require("../models/Post");
const mongoose = require("mongoose");

const postModel = mongoose.model("Post",post);

class PostController {
    async create(user_id,title,topic,text,date){
        const createPost = new postModel({
            user_id,title,topic,text,date
        });
        
        try{
            await createPost.save();
            return true;
        }catch(e){
            console.log(e);
            return false;
        }
    }
}

module.exports = new PostController();