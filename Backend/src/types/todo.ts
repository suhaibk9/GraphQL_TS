import mongoose from "mongoose";

export default interface ITodo extends mongoose.Document {
  title: string;
  tags: string[];
  completed: boolean;
}
