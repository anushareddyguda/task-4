const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    const count = await User.countDocuments();
    console.log("User count:", count);
      await User.insertMany([
        { name: "John", available: true },
        { name: "Sarah", available: false },
        { name: "Mike", available: true },
        { name: "Emma", available: true },
        { name: "David", available: false },
        { name: "Sophia", available: true },
        { name: "James", available: false },
        { name: "Olivia", available: true },
        { name: "Daniel", available: true },
        { name: "Ava", available: false },
        { name: "William", available: true },
        { name: "Mia", available: false },
        { name: "Alexander", available: true },
        { name: "Charlotte", available: true },
        { name: "Benjamin", available: false }
      ]);

      console.log("Sample users added");
    }
  )
  .catch((err) => console.log(err));

app.use("/api/users", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});