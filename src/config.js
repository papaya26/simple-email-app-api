export const emailDefaultSender = 'juddisgood999@gmail.com';

export const enableDocs = +process.env.ENABLE_DOCS || 1;

export const mongodbURI =
  process.env.mongodbURI ||
  'mongodb://heroku_lp534c4g:l8knj52fkrnirr2pbr6nguk0a5@ds121183.mlab.com:21183/heroku_lp534c4g';

export const jwtConfig = {
  sKey: '89A373BC6773C84D131235BC3BB6E',
  sKeyExp: '3h'
};

export const rtoMills = 300000;

export const smtp = {
  mailjet: {
    host: 'in-v3.mailjet.com',
    port: 587,
    auth: {
      user: '7d9b614253239f41e698ee9d07620b52',
      pass: '87e0be3aeb2cd7139313f7a5f46b5da9'
    }
  },
  mailgun: {
    host: 'smtp.mailgun.org',
    port: 587,
    auth: {
      user: 'postmaster@sandboxdfa7056b38614f53b62f09a000b65dd7.mailgun.org',
      pass: 'f1cb57b816012ae0277fb942131ce288-dc5f81da-2756a35d'
    }
  }
};
