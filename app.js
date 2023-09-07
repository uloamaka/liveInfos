const express = require("express");
const app = express();

app.use(express.json());



const v1Router = require("./routes");
app.use("/", v1Router);



const PORT = 3000 || process.env.PORT;
app.listen(3000, () => console.log(`server started at port: ${PORT}`));