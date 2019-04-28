import jsonWebToken from 'jsonwebtoken';

import { jwtConfig } from '../config';
import { messages } from '../constants';
import { userModel } from '../models';

export const authService = {
  auth: params => {
    return userModel
      .findOne({
        username: params.username
      })
      .then(user => {
        if (user) {
          return userModel
            .comparePassword(params.password, user.password)
            .then(valid => {
              if (!valid) {
                throw new Error(messages.auth.invalidCredentials);
              }
              return jsonWebToken.sign(user.getJWTDetails(), jwtConfig.sKey, {
                expiresIn: jwtConfig.sKeyExp
              });
            });
        }
        throw new Error(messages.auth.invalidCredentials);
      });
  }
};
