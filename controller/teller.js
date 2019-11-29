
 const Data = require('../data').fortune;

module.exports.teller =  () =>{
     let picker =  Math.floor(Math.random() * 29);
       return  Data[picker];
};