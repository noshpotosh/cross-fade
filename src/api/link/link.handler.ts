import { FastifyRequest, FastifyReply } from "fastify";

export async function getSlug(request: FastifyRequest, reply: FastifyReply) {
  const { slug } = request.params as { slug: string };
  return reply.send({ slug, status: "placeholder!" });
}

export async function postLink(_request: FastifyRequest, reply: FastifyReply) {
  return reply.send({ status: "placeholder!" });
}