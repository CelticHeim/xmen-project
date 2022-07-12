import jwt from "jsonwebtoken";

export function validateToken(request, response, next) {
  try {
    const accessToken = request.headers["authorization"];

    if (!accessToken) {
      response.status(401).send("Acceso Denegado, debe generar un token");
    }

    jwt.verify(accessToken, process.env.SECRET_TOKEN, (error, user) => {
      if (error) {
        response.status(401).send("Acceso Denegado, el token es incorrecto");
      } else {
        next();
      }
    })
  } catch (error) {
    response.status(500).send({ message: error })
  }
}