import * as mongoose from 'mongoose';

export let courseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  duration: Number,
  description: String,
});
