const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sign", (req, res) => {
  const email = "adm@devagro.com.br";
  const password = "dev123";

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Usuário Administrativo",
      email,
      role: ["sysAdmin"],
    };

    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: "Usuário ou senha incorretos!" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
