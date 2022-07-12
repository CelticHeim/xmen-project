import jwt from "jsonwebtoken";

export function generateToken(request, response) {
  try {
    const { username } = request.body;

    const user = {
      username: username
    }

    const accessToken = jwt.sign(user, process.env.SECRET_TOKEN, /* { expiresIn: "5m" } */);

    response
      // .header({ "authorization": accessToken })
      .send({
        message: "Token Generado",
        token: accessToken,
      })
  } catch (error) {
    response.status(500).send({ message: error })
  }
}