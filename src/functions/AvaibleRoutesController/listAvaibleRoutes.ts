export function listAvaibleRoutes(request, response) {
  try {
    response.status(200).send({
      message: "Rutas Disponibles",
      generateToken: "POST: http://xmen-project.elcidramirez.online/generate-token",
      ADN_Test: "POST: http://xmen-project.elcidramirez.online/is-mutant"
    });
  } catch (error) {
    response.status(500).send({ message: error })
  }
}