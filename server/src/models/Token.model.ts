import { model, Schema } from "mongoose";

const schema = new Schema({
    login: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    toJSON: {
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
});

export default model("Token", schema, "tokens");
