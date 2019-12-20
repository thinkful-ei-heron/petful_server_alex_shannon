const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT, NODE_ENV } = require('./config');
const adoptionRouter = require('./Adoption/adoption-router');
const catRouter = require('./Cat/cat-router');
const dogRouter = require('./Dog/dog-router');
const queueMain = require('./QueueGen');


queueMain();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';


const app = express();
app.use(cors());
app.use(morgan(morganOption));

// app.use('/api/dogs', dogRouter);
app.use('/api/cats', catRouter);



// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});





app.listen(PORT,()=>{
  console.log('Serving on 8000');
});