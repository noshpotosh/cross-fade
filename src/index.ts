import Fastify from "fastify";
import { registerRoutes } from "@/route";

const fastify = Fastify({ logger: true });

const port = Number(process.env.PORT) || 3000;

async function start() {
  await registerRoutes(fastify);
  try {
    const address = await fastify.listen({ port });
    console.log(`Server listening at ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
