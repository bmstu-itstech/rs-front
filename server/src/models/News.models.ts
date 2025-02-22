import { v1 } from "uuid";
import { Model, Schema, model } from "mongoose";
import { INews, NewsInputModel } from "@/app/types";

interface NewsModel extends Model<INews> {
    getNews(offset: number): Promise<INews[]>;
    addNews(rawPost: NewsInputModel): Promise<INews>;
    editNews(post: INews): Promise<INews>;
    getNewsById(id: string): Promise<INews>;
    getDrafts(offset: number): Promise<INews[]>;
    publish(postId: string): Promise<INews[]>;
};

const schema = new Schema<INews, NewsModel>({
    id: {
        type: String,
        default: v1
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    actionLink: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    },
    isDraft: {
        type: Boolean,
        required: true
    }
}, {
    versionKey: false,
    toObject: {
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
});

schema.static("getNews", async function getNews(offset: number) {
    const news = await this.find({ isDraft: false }).skip(offset).limit(20);
    return news.map(post => post.toObject());
});

schema.static("addNews", async function addNews(rawPost: NewsInputModel) {
    const post = await this.create(rawPost);
    return post.toObject();
});

schema.static("editNews", async function editNews(post: INews) {
    const news = await this.findOneAndUpdate({ id: post.id }, post, {
        upsert: true,
        new: true
    });
    return news.toObject();
});

schema.static("getNewsById", async function getNewsById(id: string) {
    const post = await this.findOne({ id, isDraft: false });
    if (!post) throw new Error("Post not found");
    return post.toObject();
});

schema.static("getDrafts", async function getDrafts(offset: number) {
    const drafts = await this.find({ isDraft: true }).skip(offset).limit(10);
    return drafts.map(draft => draft.toObject());
});

schema.static("publish", async function publish(postId: string) {
    const post = await this.findOne({ id: postId, isDraft: true });
    if (!post) {
        throw new Error("Draft not found");
    };
    post.isDraft = false;
    await post.save();
    return post.toObject();
});

export default model<INews, NewsModel>("News", schema, "news");
