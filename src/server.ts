import fastify from "fastify";

const app = fastify();

app.get("/", () => {
  return "Hello NLW Unite!";
});

app.listen({ port: 3333 }).then(() => {
  console.log("🚀 Server running on http://localhost:3333");
});
