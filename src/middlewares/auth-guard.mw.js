import jsonWebToken from 'jsonwebtoken';

import { jwtConfig } from '../config';

import { messages } from '../constants';

import { userModel } from '../models';

import { error } from '../utilities';

export const authGuardMW = (req, res, next) => {
  try {
    if (req.method === 'OPTIONS') {
      next();
      return;
    }
    const { authorization } = req.headers;
    if (
      !authorization ||
      (authorization && !authorization.startsWith('Bearer '))
    ) {
      error(res, { message: messages.auth.permissionDenied });
      return;
    }
    const decoded = jsonWebToken.verify(
      authorization.substring('Bearer '.length - 1).trim(),
      jwtConfig.sKey
    );
    userModel
      .findOne({
        _id: decoded._id,
        username: decoded.username
      })
      .then(user =>
        user ? next() : error(res, { message: messages.auth.permissionDenied })
      )
      .catch(() => error(res, { message: messages.auth.permissionDenied }));
  } catch (err) {
    error(res, { message: messages.auth.permissionDenied });
  }
};
