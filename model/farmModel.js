const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Animal name is required'],
        unique: [true, 'Animal with name already exist']
    },
    breed: {
        type: String,
        require: [true, 'Animals breed is required']
    },
    colour: {
        type: String,
        require: [true, 'Animal colour is required']
    },
    age: {
        type: Number,
        require: [true, 'Animal age is required'],
    },
    isMatured: {
        type: Boolean,
        default: false
    },
    isSold: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const farmModel = mongoose.model('Farm', farmSchema);
module.exports = farmModel;



// const mongoose = require("mongoose");

// const farmSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, 'Animal name is required'],
//         unique: [true, 'Animal with name already exist']
//     },
//     breed: {
//         type:  String,
//         require: [true, 'Animals breed is required']
//     },
//     colour: {
//         type: String,
//         require: [true, 'Animal colour is required']
//     },
//     age: {
//         type: Number,
//         require: [true, 'Animal age is required'],


//     },
//     isMatured: {
//         type: Boolean,
//         default: false
//     },
//     isSold: {
//         type: Boolean,
//         default: false
//     }
// }, {timestamps: true});

// const farmModel = mongoose.model('Farm', farmSchema)
// module.exports = farmModel