import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectDb from "./connectDb.js";

dotenv.config();

const server = express();
const PORT = 8000;

server.use(cors());
// server.post("/", async (request, response) => {
//   const db = await connectDb();
//   let collection = db.collection("movies");
//   let res = await collection.insertOne({
//     plot: "Zoloo tuguu mongodb collection ruu document-iig insertOne ashiglan oruulav",
//     genres: ["Zoloo", "Tuuguu"],
//   });

//   response.json({
//     success: true,
//     data: res,
//   });

//   // response.send(["Zoloo", "Zen", "Buddhism"]);
// });

// server.post("/image-upload", async (request, response) => {
//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });

//     const uploadResult = await cloudinary.uploader.upload("./assets/egg.png");
//     response.json(uploadResult.url);
//   } catch (error) {
//     console.log("cloudinary error", error);
//   }
// });

server.get("/", async (request, response) => {
  const database = await connectDb();
  // console.log(database);

  // const moviesCollection = database.collection("movies");
  // const ourInsertedDocuments = moviesCollection.find({
  //   genres: ["Zoloo", "Tuuguu"],
  // });
  // await ourInsertedDocuments.next();
  // const result = await ourInsertedDocuments.next();
  // response.status(200).json({
  //   result: result,
  // });
});
server.post("/create-product", async (req, response) => {
  const database = await connectDb();
  const collection = database.collection("product");
  const result = await collection.insertOne({
    name: "Jordan 11",
    owner: "Zoloo",
    price: "100000",
  });
  response.json({
    succes: true,
    data: result,
  });
});

server.put("/update", async (req, response) => {
  const database = await connectDb();
  const collection = database.collection("product");
  const result = await collection.findOneAndUpdate(
    { owner: "Zoloo" },
    {
      $set: {
        name: "Jordan 11",
        price: "8800",
        date: new Date(),
      },
    }
  );
  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/", async (req, response) => {
  const database = await connectDb();
  const collection = database.collection("product");
  const result = await collection.findOneAndDelete({ owner: "Zoloo" });
  response.json({
    succes: true,
    data: result,
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
