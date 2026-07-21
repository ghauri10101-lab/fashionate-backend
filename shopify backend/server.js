require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const braceletRoutes = require('./routes/braceletRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('Backend Running Successfully');
});

app.use('/api/bracelet', braceletRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log('====================================');
  console.log('Fashionate Backend Running');
  console.log(`Port: ${PORT}`);
  console.log('====================================');
});