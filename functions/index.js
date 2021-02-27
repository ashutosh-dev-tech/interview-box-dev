// import express from 'express';
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

// app.post('/payments/create', async (request, response) => {
//   const total = request.query.total;
//   console.log('Payment Request Recieved for amount: ', total);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd"
//   });

//   // 201 - okay created
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret
//   });
// });

// Listen
exports.api = functions.https.onRequest(app);
