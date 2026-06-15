import { FastifyInstance } from "fastify";
import { healthRoute } from "@/api/health";
import { linkRoute } from "@/api/link";

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(healthRoute);
  await fastify.register(linkRoute);
}

