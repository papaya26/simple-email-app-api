import { userService } from '../services';
import { success, error } from '../utilities';

export const userController = {
  /**
   *
   * @api {post} {endpoint}/user createUser
   * @apiVersion 1.0.0
   * @apiGroup User
   * @apiDescription Create user record. A pregenerated password is sent via email
   *
   * @apiHeader {string} Authorization - 'Bearer [accessToken]' Source: auth
   *
   * @apiParam {string} email - user email address
   * @apiParam {string} password - password
   *
   * @apiParamExample {json} Request example:
   * 	{
   *		"email": "iamsuper@mailinator.com",
   *		"password": "test123"
   * 	}
   *
   * @apiSuccessExample {json} Success response example:
   * 	{
   *		"status": 1,
   *		"message": "Success"
   * 	}
   *
   * @apiErrorExample {json} Error response example:
   * 	{
   * 		"status": 0,
   * 		"message": "Username already exists"
   * 	}
   *
   */
  createUser: (req, res) => {
    try {
      userService
        .createUser(req.body)
        .then(user => success(res, user))
        .catch(err => error(res, err));
    } catch (err) {
      error(res, err);
    }
  }
};
