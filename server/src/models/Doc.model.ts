import { v1 } from "uuid";
import { Model, Schema, model } from "mongoose";
import { DocInputModel, IDoc } from "@/app/types";

interface DocModel extends Model<IDoc, {}, {}> {
    getByIds(ids: string[]): Promise<IDoc[]>;
    add(rawDoc: DocInputModel): Promise<IDoc>;
    remove(docId: string): Promise<void>;
};

const schema = new Schema<IDoc, DocModel, {}>({
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
    format: {
        type: String,
        required: true
    },
    src: {
        type: String,
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

schema.static("getByIds", async function getByIds(ids: string[]) {
    const docs = await this.find({ id: { $in: ids } });
    return docs.map(doc => doc.toObject());
});

schema.static("add", async function add(rawDoc: DocInputModel) {
    const doc = await this.create(rawDoc);
    return doc.toObject();
});

schema.static("remove", async function remove(docId: string) {
    await this.deleteOne({ id: docId });
});

export default model<IDoc, DocModel>("Doc", schema, "docs");
