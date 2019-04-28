import { rtoMills } from '../config';

import { messages } from '../constants';

import { error } from '../utilities';

export const timeoutMW = (req, res, next) => {
  setTimeout(() => {
    if (!res.headersSent) {
      error(rse, { message: messages.generic.requestTimedOut });
      return;
    }
  }, rtoMills);
  next();
};
