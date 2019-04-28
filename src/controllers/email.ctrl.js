import { emailService } from '../services';

import { success, error } from '../utilities';

export const emailController = {
  email: (req, res) => {
    try {
      emailService
        .sendMail(req.body)
        .then(() => success(res))
        .catch(err => error(res, err));
    } catch (err) {
      error(res, err);
    }
  }
};
