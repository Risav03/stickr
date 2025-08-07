import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  fid: string;
}

const UserSchema: Schema = new Schema({
  fid: { type: String, required: true, unique: true }
});

export default mongoose.model<IUser>('User', UserSchema);