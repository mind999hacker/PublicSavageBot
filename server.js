const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
//const config = require(`./config/default.json`);
//const { find } = require('./models/couples');

const Couples = require("./models/couples");

//const db = config.mongoURI;
class CoupleDb {
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

  async newSave(id1, id2) {
    const newCouple = new Couples({
      dbID: `${id1} ${id2}`,
    });

    newCouple.save().catch((err) => console.log(err));
  }

  async delete(id) {
    Couples
  .findOneAndDelete(
    { dbID: id }
  ).catch((err) => console.log(err));
  }

  async findFinal() {
    return find();
  }
}
async function find() {
  return Couples.find()
    .sort({ date: -1 })
    .then((items) => {
      return items;
    });
}
module.exports = CoupleDb;
