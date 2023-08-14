import loadSecrets from "./utils/keyvault";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  async register({ strapi }) {
    if (process.env.VAULT_NAME) {
      try {
        const secrets = await loadSecrets();
        console.log("...........secrets", secrets);
        const { admin, database, plugin, server } = strapi.config;
        
        admin.auth.secret = secrets.adminJwtSecret;
        admin.apiToken.salt = secrets.adminApiTokenSalt;
        admin.transfer.token.salt = secrets.adminTransferTokenSalt;

        database.connection.connection.user = secrets.dbuser;
        database.connection.connection.password = secrets.dbpassword;

        plugin["users-permissions"].jwtSecret = secrets.jwtSecret;

        server.app.keys = secrets.appKeys.split(',');
      } catch (err) {
        console.log(err);
      }
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
