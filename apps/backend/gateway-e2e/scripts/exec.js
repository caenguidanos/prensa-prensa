/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const child_process = require("child_process");
const findProcess = require("find-process");

const DomainArticlesDriver = require("@workspace/domain-articles-driver");

async function prepareEnvironment() {
   const { default: chalk } = await import("chalk");

   const mongodbCredentials = {
      user: "admin",
      password: "1234",
      port: 27017,
      host: "localhost"
   };

   child_process.spawnSync("docker", [
      "run",
      "-p",
      "27017:27017",
      "-e",
      `MONGO_INITDB_ROOT_USERNAME=${mongodbCredentials.user}`,
      "-e",
      `MONGO_INITDB_ROOT_PASSWORD=${mongodbCredentials.password}`,
      "-d",
      "mongo"
   ]);

   const mongodbURI = `mongodb://${mongodbCredentials.user}:${mongodbCredentials.password}@${mongodbCredentials.host}:${mongodbCredentials.port}`;
   process.env.MONGODB_URI = mongodbURI;

   let client = await DomainArticlesDriver.connectClient();
   await DomainArticlesDriver.dropClientDatabase();
   await DomainArticlesDriver.disconnectClient(client);

   client = await DomainArticlesDriver.connectClient();
   await DomainArticlesDriver.schemaDriver().insertMany(
      DomainArticlesDriver.generateRandomCollection(10)
   );
   await DomainArticlesDriver.disconnectClient(client);

   child_process.execSync("pnpm build --filter backend-services-articles-query");
   child_process.execSync("pnpm build --filter backend-services-articles-command");

   const p1 = child_process.spawn(
      "pnpm",
      "start --filter backend-services-articles-query".split(" "),
      {
         env: {
            ...process.env,
            MONGODB_URI: mongodbURI,
            PORT: 4001
         }
      }
   );

   const p1Log = (k) => console.log(`${chalk.blueBright("backend-services-articles-query")} ${k}`);

   p1.stdout.on("data", (chunk) => {
      p1Log(chunk);
   });

   p1.stderr.on("data", (chunk) => {
      p1Log(chunk);
   });

   p1.on("error", (chunk) => {
      p1Log(chunk);
   });

   const p2 = child_process.spawn(
      "pnpm",
      "start --filter backend-services-articles-command".split(" "),
      {
         env: {
            ...process.env,
            MONGODB_URI: mongodbURI,
            PORT: 4002
         }
      }
   );

   const p2Log = (k) =>
      console.log(`${chalk.greenBright("backend-services-articles-command")} ${k}`);

   p2.stdout.on("data", (chunk) => {
      p2Log(chunk);
   });

   p2.stderr.on("data", (chunk) => {
      p2Log(chunk);
   });

   p2.on("error", (chunk) => {
      p2Log(chunk);
   });

   const p3 = child_process.spawn("pnpm", "dev --filter backend-gateway".split(" "));

   const p3Log = (k) => console.log(`${chalk.yellowBright("backend-gateway")} ${k}`);

   p3.stdout.on("data", (chunk) => {
      p3Log(chunk);
   });

   p3.stderr.on("data", (chunk) => {
      p3Log(chunk);
   });

   p3.on("error", (chunk) => {
      p3Log(chunk);
   });

   // Golang Fiber start
   await new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, 2000);
   });

   const pT = child_process.spawn("playwright", ["test"]);
   let pTData = "";

   pT.stdout.on("data", (chunk) => {
      pTData += `${chunk}`;
      console.log(`${chunk}`);
   });

   pT.stderr.on("data", (chunk) => {
      console.log(`${chunk}`);
   });

   pT.on("error", async (chunk) => {
      console.log(`${chunk}`);

      process.kill(p1.pid, "SIGINT");
      process.kill(p2.pid, "SIGINT");

      const pps = await findProcess("port", 4000);
      for (const i of pps) {
         process.kill(i.pid, "SIGTERM");
      }

      child_process.execSync("docker kill $(docker ps -q)");
      child_process.execSync("docker rm $(docker ps -a -q)");

      process.exit(1);
   });

   pT.stdout.on("end", async () => {
      process.kill(p1.pid, "SIGINT");
      process.kill(p2.pid, "SIGINT");

      const pps = await findProcess("port", 4000);
      for (const i of pps) {
         process.kill(i.pid, "SIGTERM");
      }

      child_process.execSync("docker kill $(docker ps -q)");
      child_process.execSync("docker rm $(docker ps -a -q)");

      if (pTData.match(/(failed|Error)/gi)) {
         process.exit(1);
      }

      process.exit(0);
   });
}

prepareEnvironment();
