import { v1 } from "uuid";
import { Model, Schema, model } from "mongoose";
import { HardathonProjectInputModel, IHardathonProject } from "@/app/types";

interface HardathonProjectModel extends Model<IHardathonProject, {}, {}> {
    get(hardathonId: string, offset: number): Promise<IHardathonProject[]>;
    add(rawProject: HardathonProjectInputModel): Promise<IHardathonProject>;
    update(project: IHardathonProject): Promise<IHardathonProject>;
    remove(projectId: string): Promise<void>;
};

const schema = new Schema<IHardathonProject, HardathonProjectModel, {}>({
    id: {
        type: String,
        default: v1
    },
    hardathonId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    scopeUrl: {
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

schema.static("get", async function get(hardathonId: string, offset: number) {
    const projects = await this.find({ hardathonId }).skip(offset).limit(20);
    return projects.map(project => project.toObject());
});

schema.static("add", async function add(rawProject: HardathonProjectInputModel) {
    const project = await this.create(rawProject);
    return project.toObject();
});

schema.static("update", async function update(project: IHardathonProject) {
    const updated = await this.findOneAndUpdate({ id: project.id }, project, {
        upsert: true,
        new: true
    });
    return updated.toObject();
});

schema.static("remove", async function remove(projectId: string) {
    await this.deleteOne({ id: projectId });
});

export default model<IHardathonProject, HardathonProjectModel>("HardathonProject", schema, "hardathonProjects");
