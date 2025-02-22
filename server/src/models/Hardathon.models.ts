import { v1 } from "uuid";
import { Model, Schema, model } from "mongoose";
import { HardathonInputModel, IHardathon } from "@/app/types";

interface HardathonModel extends Model<IHardathon, {}, {}> {
    get(offset: number): Promise<IHardathon[]>;
    add(rawHardathon: HardathonInputModel): Promise<IHardathon>;
    update(hardathon: IHardathon): Promise<IHardathon>;
    remove(hardathonId: string): Promise<void>;
};

const schema = new Schema<IHardathon, HardathonModel, {}>({
    id: {
        type: String,
        default: v1
    },
    title: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    resultsDate: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    media: {
        type: [String],
        default: []
    },
    photos: {
        type: [String],
        default: []
    },
    docs: {
        type: [Number],
        default: []
    },
    partners: {
        type: [String],
        default: []
    },
    rulesUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    avatarUrl: {
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

schema.static("get", async function get(offset: number) {
    const hardathons = await this.find({}).skip(offset).limit(10);
    return hardathons.map(hardathon => hardathon.toObject());
});

schema.static("add", async function add(rawHardathon: HardathonInputModel) {
    const hardathon = await this.create(rawHardathon);
    return hardathon.toObject();
});

schema.static("update", async function update(hardathon: IHardathon) {
    const updated = await this.findOneAndUpdate({ id: hardathon.id }, hardathon, {
        upsert: true,
        new: true
    });
    return updated.toObject();
});

schema.static("remove", async function remove(hardathonId: string) {
    await this.deleteOne({ id: hardathonId });
});

export default model<IHardathon, HardathonModel>("Hardathon", schema, "hardathons");
