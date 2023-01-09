const express = require("express");
const register = require("./register");
const login = require("./login");
const orders = require("./orders");
const stripe = require("./stripe");
const productsRoute = require("./products");

const app = express();

app.use("/register", register);
app.use("/login", login);
app.use("/orders", orders);
app.use("/stripe", stripe);
app.use("/products", productsRoute);

module.exports = app