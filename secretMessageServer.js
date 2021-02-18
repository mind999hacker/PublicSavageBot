const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
//const config = require(`./config/default.json`);
//const { find } = require('./models/couples');

const Secret = require("./models/secretMessageModel");

//const db = config.mongoURI;
class SecretMessageDb {
  constructor() {
    this.works = true;
  }

  async connect(params) {
    /*mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log("MongoDB Connected..."))
      .catch((err) => console.log(err));*/
  }

  async newSave(id) {
    const newUser = new Secret({
      userId: `${id}`,
    });

    newUser.save().catch((err) => console.log(err));
  }

  async delete(id) {
    Secret
  .findOneAndDelete(
    { userId: id }
  )
  .catch((err) => console.log(err));
  }

  async findFinal(id) {
    return find(id);
  }

  async findResetFinal() {
    return findReset();
  }
  
}
async function find(nameId) {
    return Secret.find(
        { userId : nameId })
        .then(items => {return items})
        .catch(err => console.error());
}

async function findReset() {
    return Secret.find().sort({ date: -1 })
    .then((items) => {
      return items;
    })
        .catch(err => console.error());
}
module.exports = SecretMessageDb;