
async function isMutant(request, response) {
  try {
    console.log(request.body);

    response.send("dataBody");
  } catch (error) {
    console.log(error.message);
  }
}

export default isMutant;