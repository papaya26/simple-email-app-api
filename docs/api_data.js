define({ "api": [
  {
    "type": "post",
    "url": "{endpoint}/auth",
    "title": "auth",
    "version": "1.0.0",
    "group": "Auth",
    "description": "<p>Authenticates user login credentials. Returns token with basic user details</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<ul> <li>user email address</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>user password</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n\t\"username\": \"iamsuper@mailinator.com,\n\t\"password\": \"iamsuper26\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\n\t\"status\": 1,\n\t\"message\": \"Success\",\n\t\"data\": {\n\t\t\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjkwMDIwNDJmMGE0ZDA0YjhhNjI5ZDkiLCJ1c2VybmFtZSI6ImNwc0BtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTUzNjE2NDM4OSwiZXhwIjoxNTM2MTc1MTg5fQ.WtwjE3iGUbae0TyjsiV--V5xNFex7kxuZTF6R4tUP9U\",\n\t\t\"user\": {\n\t\t\t\"username\": \"cpsadmin@mailinator.com\",\n\t\t\t\"firstname\": \"cps\",\n\t\t\t\"middlename\": null.\n\t\t\t\"lastname\": \"admin\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response example:",
          "content": "{\n\t\"status\": 0,\n\t\"message\": \"Invalid credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/auth.ctrl.js",
    "groupTitle": "Auth",
    "name": "PostEndpointAuth"
  },
  {
    "type": "post",
    "url": "{endpoint}/user",
    "title": "createUser",
    "version": "1.0.0",
    "group": "User",
    "description": "<p>Create user record. A pregenerated password is sent via email</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<ul> <li>'Bearer [accessToken]' Source: auth</li> </ul>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>user email address</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<ul> <li>password</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request example:",
          "content": "{\n\t\"email\": \"iamsuper@mailinator.com\",\n\t\"password\": \"test123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success response example:",
          "content": "{\n\t\"status\": 1,\n\t\"message\": \"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response example:",
          "content": "{\n\t\"status\": 0,\n\t\"message\": \"Username already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/controllers/user.ctrl.js",
    "groupTitle": "User",
    "name": "PostEndpointUser"
  }
] });
