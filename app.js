const express = require('express');

const tourRouter = require('./routes/tourRoutes');
const useRouter = require('./routes/userRoutes');

const app = express();
// 1) MIDDLEWARES
// app.use(morgan('dev'));
app.use(express.json()); // MIDDLEWARE FOR POST TO RECEIVE THE REQUEST

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('Youn cand post to this endpoint...');
// });

// Declarative way to set routes up
// // GET TOURS
// app.get('/api/v1/tours', getTours);
// // POST TOUR
// app.post('/api/v1/tours', createTour);

// // GET TOURS ID
// app.get('/api/v1/tours/:id', getTour);
// // PATCH TOUR
// app.patch('/api/v1/tours/:id', updateTour);
// // DELETE TOUR
// app.delete('/api/v1/tours/:id', deleteTour);

// 4) ROUTES
// Clenear way declaring routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', useRouter);

module.exports = app;
