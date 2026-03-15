const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}))
app.listen(3000, () => {
  console.log(`http://localhost:3000`)
})