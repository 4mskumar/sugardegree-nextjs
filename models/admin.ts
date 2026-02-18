import mongoose, {model, models} from 'mongoose'


export interface IAdmin {
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema<IAdmin>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const Admin = models.Admin || model<IAdmin>("Admin", adminSchema);
