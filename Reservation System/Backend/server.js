import app from "./app.js";
import dotenv from "dotenv";

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Use PORT from env or fallback
const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`);
});