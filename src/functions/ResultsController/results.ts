import { Result } from "../../models/Result";

export async function results(request, response) {
  try {
    const result = await Result.findAll();

    response.status(200).send({
      "Resultados de pruebas anteriores": result
    });
  } catch (error) {
    response.status(500).send({ message: error })
  }
}