import { v1 } from "uuid";
import { Model, Schema, model } from "mongoose";
import { AchievementInputModel, IAchievement } from "@/app/types";

interface AchievementModel extends Model<IAchievement, {}, {}> {
    get(offset: number): Promise<IAchievement[]>;
    add(achievement: AchievementInputModel): Promise<IAchievement>;
    update(achievement: IAchievement): Promise<IAchievement>;
    remove(achievementId: string): Promise<void>;
    getById(achievementId: string): Promise<IAchievement>;
};

const schema = new Schema<IAchievement, AchievementModel, {}>({
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
    coverUrl: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        default: []
    },
    media: {
        type: [String],
        default: []
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
    const achievements = await this.find({}).skip(offset).limit(10);
    return achievements.map(achievement => achievement.toObject());
});

schema.static("add", async function add(rawAchievement: AchievementInputModel) {
    const achievement = await this.create(rawAchievement);
    return achievement.toObject();
});

schema.static("update", async function update(achievement: IAchievement) {
    const updated = await this.findOneAndUpdate({ id: achievement.id }, achievement, {
        upsert: true,
        new: true
    });
    return updated.toObject();
});

schema.static("remove", async function remove(achievementId: string) {
    await this.deleteOne({ id: achievementId });
});

schema.static("getById", async function getById(achievementId: string) {
    const achievement = await this.findOne({ id: achievementId });
    if (!achievement) {
        throw new Error("Achievement not found");
    };
    return achievement.toObject();
});

export default model<IAchievement, AchievementModel>("Achievement", schema, "achievements");
