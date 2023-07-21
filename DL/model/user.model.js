const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name : {
      type : String,
      required : true
  },
  password : {
      type : String,
      required : true,
      select : false
  },
  email : {
      type : String,
      required : true,
      unique : true
  },
  createdDate : {
      type : Date,
      default : Date.now
  },
  lastConnectedDate : {
      type : Date,
      default : Date.now
  },
  isActive : {
      type : Boolean,
      default : true
  },
  favorites : [{
      song : {
          type : mongoose.SchemaTypes.ObjectId,
          required : true,
          
      },
      isActive : {
          type : Boolean,
          default : true
      }
  }],
  playlists : [{
      list : [{
          song : {
              type : mongoose.SchemaTypes.ObjectId,
              required : true,
              
          },
          isActive : {
              type : Boolean,
              default : true
          }
      }]
  }]
})



const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
