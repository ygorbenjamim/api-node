import jwt from "jsonwebtoken";

const authService = async (user: string, password: string) => {
  if (user == "ygor" && password == "admin") {
    const token = jwt.sign({ userId: "abc" }, process.env.SECRET_KEY!, {
      expiresIn: 1000,
    });
    return { token };
  }
  return undefined;
};

export { authService };
