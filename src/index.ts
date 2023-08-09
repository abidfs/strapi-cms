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
        strapi.config.database.connection.connection.user = secrets.dbuser;
        strapi.config.database.connection.connection.password =
          secrets.dbpassword;
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
