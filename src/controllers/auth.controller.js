const jwt = require("jsonwebtoken");

const auth = async (req, res) => {
  const { user, password } = req.body;
  if (user == "ygor" && password == "admin") {
    const token = jwt.sign({ userId: "abc" }, process.env.SECRET_KEY, {
      expiresIn: 1000,
    });
    return res.json({ token });
  }

  return res.status(400).json({ message: "Verifique o usuário e senha" });
};

module.exports = {
  auth,
};
