const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
//const config = require(`./config/default.json`);
//const { find } = require('./models/MoneyTime');

const MoneyTime = require('./models/moneyTime');

//const db = config.mongoURI;
class MoneyTimeDb{

    constructor(){

        this.works = true;
    }


  async connect(params) {
    

    /*mongoose
      .connect(db, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
      .then(() => console.log('MongoDB Connected...'))
      .catch(err => console.log(err));*/
    }

    async newSave(nameId) {

        const newCouple = new MoneyTime({
            name: nameId,
          })

          newCouple
  .save()
  .catch(err => console.log(err));
        
    }

    async set(StringId)
    {
      let nameId = Number(StringId);
        MoneyTime
  .findOneAndDelete(
    { name: nameId }
  ).catch((err) => console.log(err));
  await this.newSave(nameId);

    }

    async findFinal(name) {
        return find(name);
    }

}
async function find(StringId) {
  let nameId = Number(StringId);
    return MoneyTime.find(
{ name: nameId })
.then(items => {return items[0].dateOfEntry})
.catch(err => console.error());
    }
  module.exports = MoneyTimeDb;

    