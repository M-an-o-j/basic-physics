const DataModel = require('../model/DataModel')
const mongoose = require('mongoose')

//get all books
const GetData = async (req, res) => {
    const books = await DataModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(books)
}

module.exports = {GetData}