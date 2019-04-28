import { messages } from '../constants';

import { userModel } from '../models';

export const userService = {
  createUser: user => {
    return userModel.findOne({ email: user.email }).then(res => {
      if (res) {
        throw new Error(messages.user.alreadyExists);
      }
      return userModel.hashPassword(user.password).then(hashPassword => {
        user.password = hashPassword;
        return new userModel(user).save().then(() => undefined);
      });
    });
  }
};
