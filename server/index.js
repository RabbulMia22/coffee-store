const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Coffe Server is running');

});
app.listen(port, () => {
  console.log(`Coffe Server is running at http://localhost:${port}`);
});