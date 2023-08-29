import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { UserDocument } from "common-lib/src/types";

function setPassword(value: string) {
  return bcrypt.hashSync(value, 10);
}

const UserSchema = new Schema<UserDocument>({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    set: setPassword,
  },
});

const User = model("users", UserSchema);
export default User;
