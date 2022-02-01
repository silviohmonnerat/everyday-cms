import { http } from "./app";

const port = process.env.PORT || 3000;

http.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`)
);
