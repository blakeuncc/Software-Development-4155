const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    firstName: { type: String, required: [true, 'First name cannot be empty'] },
    lastName: { type: String, required: [true, 'Last name cannot be empty'] },
    email: { type: String, required: [true, 'Email cannot be empty'], unique: true },
    phone: { type: String },  
    password: { type: String, required: [true, 'Password cannot be empty'] },
    location: { type: String, required: [true, 'Location cannot be empty'] },
    notificationPreferences: {
        weather: { type: Boolean, default: false },
        traffic: { type: Boolean, default: false },
        publicSafety: { type: Boolean, default: false }
    },
    termsAccepted: { type: Boolean, required: [true, 'You must accept the terms and conditions'] },
    createdAt: { type: Date, default: Date.now }
});

// Hash the password before saving
userSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
            next();
        })
        .catch(err => next(err));
});

// Method to compare passwords
userSchema.methods.comparePassword = function (loginPassword) {
    return bcrypt.compare(loginPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
