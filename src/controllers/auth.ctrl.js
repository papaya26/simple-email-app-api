import { authService } from '../services';

import { success, error } from '../utilities';

export const authController = {
  /**
   *
   * @api {post} {endpoint}/auth auth
   * @apiVersion 1.0.0
   * @apiGroup Auth
   * @apiDescription Authenticates user login credentials. Returns token with basic user details
   *
   * @apiParam {string} username - user email address
   * @apiParam {string} password - user password
   *
   * @apiParamExample {json} Request example:
   * 	{
   * 		"username": "iamsuper@mailinator.com,
   * 		"password": "iamsuper26"
   * 	}
   *
   * 	@apiSuccessExample {json} Success response example:
   * 	{
   *		"status": 1,
   *		"message": "Success",
   *		"data": {
   *			"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjkwMDIwNDJmMGE0ZDA0YjhhNjI5ZDkiLCJ1c2VybmFtZSI6ImNwc0BtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTUzNjE2NDM4OSwiZXhwIjoxNTM2MTc1MTg5fQ.WtwjE3iGUbae0TyjsiV--V5xNFex7kxuZTF6R4tUP9U",
   *			"user": {
   *				"username": "cpsadmin@mailinator.com",
   *				"firstname": "cps",
   *				"middlename": null.
   *				"lastname": "admin"
   *			}
   *		}
   * 	}
   *
   * 	@apiErrorExample {json} Error response example:
   * 	{
   * 		"status": 0,
   * 		"message": "Invalid credentials"
   * 	}
   */
  auth: (req, res) => {
    try {
      authService
        .auth(req.body)
        .then(auth => success(res, auth))
        .catch(err => error(res, err));
    } catch (err) {
      error(res, err);
    }
  }
};
