const express = require ('express');
const app = express();
 app.use(express.json());

 app.get('/', (req, res) => {
  console.log("Hello from backend");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
