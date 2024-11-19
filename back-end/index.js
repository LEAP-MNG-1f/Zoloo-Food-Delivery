import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
const server = express();
const PORT = 8000;

server.use(cors());
server.get("/", (request, response) => {
  response.send(["Zoloo", "Zen", "Buddhism"]);
});

server.post("/image", async (request, response) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const uploadResult = await cloudinary.uploader.upload("./assets/egg.png");
    response.json(uploadResult.url);
  } catch (error) {
    console.log("cloudinary error", error);
  }
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
