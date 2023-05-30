import app from "./configs/app";
require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listen in port ${port}`);
});
