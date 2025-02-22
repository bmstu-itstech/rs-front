import { v1 } from "uuid";
import { Model, Schema, model } from "mongoose";
import { EventInputModel, IEvent } from "@/app/types";

interface EventModel extends Model<IEvent, {}, {}> {
    get(offset: number): Promise<IEvent[]>;
    add(rawEvent: EventInputModel): Promise<IEvent>;
    update(event: IEvent): Promise<IEvent>;
    remove(eventId: string): Promise<void>;
};

const schema = new Schema<IEvent, EventModel, {}>({
    id: {
        type: String,
        default: v1
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        default: []
    },
    mentions: {
        type: [String],
        required: true
    },
    docs: {
        type: [Number],
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
    const events = await this.find({}).skip(offset).limit(10);
    return events.map(event => event.toObject());
});

schema.static("add", async function add(rawEvent: EventInputModel) {
    const event = await this.create(rawEvent);
    return event.toObject();
});

schema.static("update", async function update(event: IEvent) {
    const updated = await this.findOneAndUpdate({ id: event.id }, event, {
        upsert: true,
        new: true
    });
    return updated.toObject();
});

schema.static("remove", async function remove(eventId: string) {
    await this.deleteOne({ id: eventId });
});

export default model<IEvent, EventModel>("Event", schema, "events");
