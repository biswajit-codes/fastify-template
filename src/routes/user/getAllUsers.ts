import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const root: FastifyPluginAsyncTypebox = async (fastify): Promise<void> => {
  fastify.route({
    method: "GET",
    url: "/",
    schema: {},
    handler: async (request, reply) => {
      const user = "ho";

      reply.send(user);
    },
  });
};

export default root;
