import { messages } from '../constants';

import { error } from '../utilities';

export const otherReqMW = (req, res) => {
  error(res, { message: messages.generic.notFound });
};
