const {Schema , model} = require("../connection")
const bcrypt = require("bcrypt")
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    name: {type: String},
    email: {type:String , unique: true, required: true},
    password: { type: String , required: true},
    role: { type: String , default: "user"}
})


UserSchema.pre("save", function(next) {
    const user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

UserSchema.methods.comparePassword = function(candidatePassword) {
  return  bcrypt.compare(candidatePassword, this.password );
};

module.exports = model("user", UserSchema)