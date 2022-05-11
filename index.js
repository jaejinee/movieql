// import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./graphql/resolvers";

// const server = new GraphQLServer({
//   typeDefs: "graphql/schema.graphql",
//   resolvers,
// });

// server.start(() => {
//   console.log("GraphQL Server Running");
// });

import { createServer } from "@graphql-yoga/node";
import { schema } from "./schema";

async function main() {
  // const server = createServer({ schema });
  // await server.start();
}

main();
