import { FastifyInstance } from "fastify";
import { getSlug, postLink } from "@/api/link/link.handler";

export async function linkRoute(fastify: FastifyInstance) {
  fastify.post("/v1/links", postLink);
  fastify.get("/v1/links/:slug", getSlug);
}