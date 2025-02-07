const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:admin@e-tradedb.gp8hs.mongodb.net/?retryWrites=true&w=majority&appName=e-TradeDb";

const connection = () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}

module.exports = connection;