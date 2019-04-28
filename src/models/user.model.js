import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  email: {
    type: String,
    unique: true
  },
  password: String
});

userSchema.methods.getBasicDetails = function() {
  return {
    email: this.email
  };
};

userSchema.methods.getJWTDetails = function() {
  return {
    _id: this._id,
    email: this.email
  };
};

userSchema.statics.comparePassword = (passwordA, passwordB) => {
  return bcrypt.compare(passwordA, passwordB);
};

userSchema.statics.hashPassword = password => {
  return bcrypt.genSalt().then(salt => bcrypt.hash(password, salt));
};

export const userModel = mongoose.model('users', userSchema);
