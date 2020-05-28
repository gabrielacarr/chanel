require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5001;

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('./config/passport');
const cors = require('cors')

app.use(cors({
    origin: true,
    credentials: true
}))


//Connection to Mongo
mongoose.connect(process.env.MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

//Error connecting to Mongo
mongoose.connection.on("error", (error) => {
    console.log("Error: Connection to MongoDB " + error);
});

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: "secret",
      cookie: { maxAge: 1000 * 60 * 60 }
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

//Model import
// require("./models/post");
// require("./models/category");
// require('./models/user');

app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));

//Router import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require('./routes/auth'));

app.listen(PORT, () => {
    console.log("Server has started at " + PORT)
});