
export const isMutant = (request, response) => {
  try {
    const body = request.body;

    response.send(body);
  } catch (error) {
    console.log(error.message);
  }
}
