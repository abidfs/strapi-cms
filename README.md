# 🚀 Strapi CMS

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html)
(CLI) which lets you scaffold and manage your project in seconds.

### `prerequisites`

To use Strapi, it is necessary to have an active `MySQL` instance as the data source. Fortunately, there is a convenient way to start a local `MySQL` instance using `docker-compose`. You can initiate it effortlessly by executing the following command:

```
docker-compose up strapi-mysql adminer
```

This will start the `MySQL` instance within Docker. Additionally, it will also start the `adminer` instance, which serves as a Graphical User Interface (GUI) for connecting to `MySQL` and exploring the database.<br>
Simply visit http://localhost:7000 in the browser to access the `adminer` GUI.<br><br>

### `install`

Install dependencies

```
yarn install
```

<br>

### `develop`

Start your `Strapi` application in `development` mode with `autoReload` enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
yarn develop
```

Simply visit http://localhost:1337/admin in the browser to access the `strapi` admin panel.<br>
You may also need to setup admin account with dummy values, if you are opening `strapi` for the very first time.<br><br>

### `start`

Start your `Strapi` application in `production` mode with `autoReload` disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
yarn start
```

<br>

### `build`

Build your `strapi` admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
yarn build
```

<br>

### `docker-compose`

To launch `Strapi` and its dependencies in `docker-compose` mode, you can effortlessly start them by executing the following command.

```
docker-compose up
```

This will start the `Strapi` instance within Docker. Additionally, it will also start the `MySQL` and `adminer` instances. These all instances are configured to live in the same docker network and talk to each other.<br>
Simply visit http://localhost:1337/admin in the browser to access the `strapi` admin panel.<br>
Simply visit http://localhost:7000 in the browser to access the `adminer` GUI.<br><br>

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.
