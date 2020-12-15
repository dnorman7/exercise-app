const mongoose = require('mongoose');

// TODO: need to create a .env file with connection URI
mongoose.connect(process.env.MONGODB_URI ||process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});

mongoose.set('useFindAndModify', false);

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});