import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "src", "db.json"); 
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    res.status(200).json(data.photographers); 
  } catch (error) {
    console.error("Failed to read db.json", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
