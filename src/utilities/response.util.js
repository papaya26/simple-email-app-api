import { messages } from '../constants';

export const success = (res, data) => {
  res.status(200).json({
    status: 1,
    data: data,
    message: messages.generic.success
  });
};

export const error = (res, err) => {
  res.status(500).json({
    status: 0,
    message: err.message || messages.generic.failed
  });
};
