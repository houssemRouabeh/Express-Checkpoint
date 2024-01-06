const express = require("express");
const app = express();
const mainRoutes = require("./Routes/mainRoutes");
const forbiddenRoute = require("./Routes/forbiddenRoute");
const port = 3000;
app.set("view engine", "pug");
app.set("views", "./Models");

// Serve static files from the "public" directory
app.use(express.static("./"));
app.use("/", mainRoutes);
app.use("/forbidden", forbiddenRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
