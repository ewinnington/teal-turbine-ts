import redis from "redis";
const client = redis.createClient({"host":"localhost", "port":7001});

client.on("error", function(error) {
  console.error(error);
});

client.set("key1", "hello world", redis.print);
client.get("key1", redis.print);