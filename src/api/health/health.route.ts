import { FastifyInstance } from "fastify";
import { getHealth } from "@/api/health/health.handler";

export async function healthRoute(fastify: FastifyInstance) {
  fastify.get("/health", getHealth);
}
