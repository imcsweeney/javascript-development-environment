import express from 'express';
import path from 'path';
import 'whatwg-fetch';
// import getBaseUrl from '../api/baseUrl';

// const baseUrl = getBaseUrl();

/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

// var User = require('../models/user');

function routes() {
  const userRouter = express.Router();
  userRouter.route('/')
    // .get((req, res) => res.sendFile(path.join(__dirname, '../templateLogReg/index.html')))
    .get((req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))
    // eslint-disable-next-line consistent-return
    .post(() => {
      const form = document.getElementById('loginForm');
      fetch('http://localhost:4000/', {
        method: 'POST',
        body: new FormData(form)
      })
        .then(onSuccess, onError);
    });
  return userRouter;
}
function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}



module.exports = routes;
