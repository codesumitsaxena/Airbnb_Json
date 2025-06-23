const express = require('express');
const cors = require('cors');
const noida = require('./data/Noida');
const gurugramListings = require('./data/Gurugram');
const similarListings = require('./data/Similar');
const kulluListings = require('./data/Kullu');
const southDelhiListings = require('./data/SouthDelhi');
const nainitalListings = require('./data/Nainital');
const southeastDelhiListings = require('./data/EastDelhi');
const jaipurListings = require('./data/Jaipur');
const gurugramDetail = require('./data/MoreGurugram');
const guestFav = require('./data/GuestMore');
const TestimonialsData = require('./data/MoreTesti')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/api/noida', (req, res) => {
  res.json(noida);
});

app.get('/api/gurugram', (req, res) => {
  res.json(gurugramListings);
});

app.get('/api/similar', (req, res) => {
  res.json(similarListings);
});
app.get('/api/kullu', (req, res) => {
  res.json(kulluListings);
});
app.get('/api/southdelhi', (req, res) => {
  res.json(southDelhiListings);
});

app.get('/api/nainital', (req, res) => {
  res.json(nainitalListings);
});
app.get('/api/eastdelhi', (req, res) => {
  res.json(southeastDelhiListings);
});

app.get('/api/jaipur', (req, res) => {
  res.json(jaipurListings);
});

app.get('/api/gurugramDetail', (req, res) => {
  res.json(gurugramDetail);
});

app.get('/api/guestFav', (req, res) => {
  res.json(guestFav);
});

app.get('/api/testiData', (req, res) => {
  res.json(TestimonialsData);
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
