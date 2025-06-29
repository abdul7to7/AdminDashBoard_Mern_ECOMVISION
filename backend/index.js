const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//Router Import
const client = require("./Routes/client");
const sales = require("./Routes/sales");
const management = require("./Routes/management");
const general = require("./Routes/general");

const app = express();

app.use(cors({
  origin: 'https://ecomvisiondash.netlify.app',
  credentials: true
}));

//data imports
const User = require("./models/UserModel");
const {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} = require("./data/index");
const Product = require("./models/ProductModel");
const ProductStat = require("./models/ProductStatModel");
const Transaction = require("./models/TransactionModel");
const OverallStat = require("./models/OverallStatModel");
const AffiliateStat = require("./models/AffiliateStat");

//Configuration
dotenv.config();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Routes
app.use("/client", client);
app.use("/general", general);
app.use("/management", management);
app.use("/sales", sales);

//mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);

      // //data adding first time
      // User.insertMany(dataUser);
      // Product.insertMany(dataProduct);
      // Transaction.insertMany(dataTransaction);
      // ProductStat.insertMany(dataProductStat);

      // AffiliateStat.insertMany(dataAffiliateStat);
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
