async function fetchApiFilter() {
  try {
    let urlApi = url
    let fetchResponse = await fetch(urlApi)

    let response = await fetchResponse.json()

    let texto = document.getElementById("id_search").value;
    let checks = Array.from(
      document.querySelectorAll(".class_checks:checked")
    ).map((each) => each.value);

    let filtro = response.events.filter((each) => {
      let nameEventstoLower = each.name.toLowerCase()
      return (
        nameEventstoLower.includes(texto) &&
        (checks.length === 0 || checks.includes(each.category))
      );
    });

    console.log(filtro);

    if (filtro.length > 0) {
      printTemplates("#cardEvents", filtro);
    } else {
      notFound("#cardEvents");
    }
  }
  catch (error) {
    console.log('ocurrió un error');
    console.log(error);
  }
}


