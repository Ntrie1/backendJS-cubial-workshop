const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        // validate: {
        //     validator: function(value){
        //         return this.repeatPassowrd === value
        //     },
        //     message:`Password missmatch!`
        // }
    },
})

userSchema.virtual('repeatPassowrd')
    .set(function(value){
        if(value !== this.password){
            throw new mongoose.MongooseError('Password missmatch!')
        }
    });

    userSchema.pre('save', async function(){
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
    })
 

const User = mongoose.model('User', userSchema);

module.exports = User;