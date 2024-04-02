// /**
//  * The Server Can be configured and created here...
//  *
//  * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
//  */

// /*

const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data");

require("dotenv").config();

app.use(cors({ origin: process.env.ORIGIN}));

const port = process.env.PORT;

const LIMIT = 4;

app.get("/product/trendingProducts", (req, res) => {
  res.json(data.slice(0, LIMIT));
});

app.get("/product/:productsToFind", (req, res) => {
  const productsToFind = req.params.productsToFind;

  const totalProducts = data
    .filter(
      (product) =>
        product.name
          .toLocaleLowerCase()
          .includes(productsToFind.toLocaleLowerCase()) ||
        product.about
          .toLocaleLowerCase()
          .includes(productsToFind.toLocaleLowerCase()) ||
        product.isActive
          .toLocaleLowerCase()
          .includes(productsToFind.toLocaleLowerCase()) ||
        product.tags.some((tag) => tag === productsToFind.toLocaleLowerCase())
    );

  const productsToReturn = totalProducts.slice(0, LIMIT);

  res.json({
    total: totalProducts.length,
    products: productsToReturn,
  });
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
