require("dotenv").config();
const port = process.env.PORT || 3000;
const app = require("./configs/app");

app.listen(port, () => {
  console.log(`server listen in port ${port}`);
});
