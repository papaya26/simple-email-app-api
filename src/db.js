import bluebird from 'bluebird';
import mongoose from 'mongoose';

import { mongodbURI } from './config';

mongoose.Promise = bluebird;

mongoose.connection.on('connected', function() {
  console.log(`Established DB connection`);
});

mongoose.connection.on('error', function(err) {
  console.error(`DB connection error: ${err}`);
});

mongoose.connection.on('disconnected', function() {
  console.log('DB connection disconnected');
});

mongoose.set('useCreateIndex', true);
mongoose.connect(mongodbURI, {
  useNewUrlParser: true
});

export default mongoose;
