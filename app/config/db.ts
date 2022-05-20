import * as mongoose from "mongoose";
const uri = "mongodb://localhost:27017/encryptr";
mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log("Couldn't connect to database");
  } else {
    console.log("Connected to database");
  }
});

export const UserSchema = new mongoose.Schema({
  hash: { type: String },
});

const User = mongoose.model("User", UserSchema);
export default User;
