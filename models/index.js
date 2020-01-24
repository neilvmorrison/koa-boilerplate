import mongoose from "mongoose";
//import MyModel from 'path';

const db_url = "";

const connection = mongoose.createConnection(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// export const MyModel = connection.model("MyModel", MyModel);
