const validateFieldTitle = (req, res, next) => {
  const { body } = req;
  if (!body.name)
    return res
      .status(400)
      .json({ message: "O título é obrigatório e não pode ser vazio." });

  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;
  if (!body.status)
    return res
      .status(400)
      .json({ message: "O status é obrigatório e não pode ser vazio." });

  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldStatus,
};
