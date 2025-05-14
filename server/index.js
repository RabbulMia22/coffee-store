const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! Coffe Server is running');

});
app.post('/coffe', (req, res) => {
  const { name, type, size } = req.body;
  console.log('Received data:', req.body);
  res.json({ message: `Coffe order received! ${name} ${type} ${size}` });
})
app.get('/coffe', (req, res) => {
  const coffe = [
    { name: 'Espresso', type: 'hot', size: 'small' },
    { name: 'Latte', type: 'hot', size: 'medium' },
    { name: 'Iced Coffee', type: 'cold', size: 'large' }
  ];
  res.json(coffe);
});
app.listen(port, () => {
  console.log(`Coffe Server is running at http://localhost:${port}`);
});
