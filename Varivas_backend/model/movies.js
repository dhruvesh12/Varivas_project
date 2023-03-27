const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MGSchema = new Schema({
original_title:{ type: String, default: '' },
overview:{ type: String, default: '' },
popularity:{ type: String, default: '' },
poster_path:{type:String,default:''},
release_date:{type:String,default:''},
title:{type:String,default:''},
vote_average:{type:String,default:''},
vote_count:{type:String,default:''},
original_language:{type:String,default:''},
link:{type:String,default:''},
backdrop_path:{type:String,default:''},
id:{type:String,default:''},
runtime:{type:String,default:''},
genres:{type:String,default:''},
});
const MG = mongoose.model('movieslist', MGSchema);
module.exports = MG; 