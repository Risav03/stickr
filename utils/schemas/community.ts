import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user';

export interface ICommunity extends Document {
  name: string;
  description: string;
  bannerImage: string;
  displayImage: string;
  admin: IUser['_id'];
  isVerified: boolean;
}

const Community: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  bannerImage: { type: String, required: true },
  displayImage: { type: String, required: true },
  admin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isVerified: { type: Boolean, default: false }
});

export default mongoose.models.Community || mongoose.model('Community', Community);