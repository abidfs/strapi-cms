const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const loadSecrets = async () => {
  const secrets = {
    dbuser: "",
    dbpassword: "",
    adminJwtSecret: "",
    adminApiTokenSalt: "",
    adminTransferTokenSalt: "",
    appKeys: "",
    jwtSecret: "",
  };
  try {
    const keyvaultUrl = `https://${process.env.VAULT_NAME}.vault.azure.net`;
    console.log("keyvault url", keyvaultUrl);
    const managedIdentityClientId = process.env.MANAGED_IDENTITY_CLIENT_ID;
    const credential = new DefaultAzureCredential({ managedIdentityClientId });
    const client = new SecretClient(keyvaultUrl, credential);

    for await (const secret of client.listPropertiesOfSecrets()) {
      if (secret.enabled) {
        const key = secret.name;
        const { value } = await client.getSecret(key);
        secrets[key] = value;
      }
    }
  } catch (err) {
    console.log(err);
  }
  return secrets;
};

export default loadSecrets;
