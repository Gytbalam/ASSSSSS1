// require modules 
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let user = mongoose.Schema(
    {
        username:
        {
            type: String,
            default:'',
            trim: true,
            required: "user name is required"
        },
            /*password:
            type: String,
                        default:"",
                        trim: true,
                        required: "user name is required"
            */
            email:
            {
                type: String,
            default:'',
            trim: true,
            required: "user name is required"
            },
            displayName:
            {
                type: String,
            default:'',
            trim: true,
            required: "user name is required"
            },
            created:
            {
                type: Date,
                default:Date.now,
            },
            updated:
            {
                type: Date,
                default:Date.now,
            },
    },
    {
        collection: "users"
    }
);

//config for user model

let options = ({missingPasswordError: 'wrong// Missing Password'});

user.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', user);

