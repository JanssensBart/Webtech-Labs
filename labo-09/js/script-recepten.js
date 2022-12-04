fetch('https://api.sampleapis.com/coffee/hot/?results=20')
    .then(function (response) {
        // nakijken of de API-call een antwoord terugstuurt
        if (response.ok) {
            // als de status "ok" (=200) is, dan wordt het antwoord omgezet in JSON
            return response.json();
        } else {
            // als de status niet "ok" is, geef dan de status terug en annuleer het uitvoeren
            return Promise.reject(response.status);
        }
    })

    .then(function (response) {
        // lees het volledige antwoord uit in de console
        console.log(response);
        // plaats een section met grid
        let html = '<div class="accordion accordion-flush" id="accordionExample">';
        // plaats van de gebruikers met afbeelding, naam,...in HTML
        console.log(response.length);
        for (let i = 0; i < response.length-2; i++) {
            const recipe = response[i];
            html += `<div class="accordion-item">

            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-uppercase fs-6 fw-bolder pt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                ${recipe.title}
                </button>
              </h2>

              <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <img src="${recipe.image}" class="img-small float-start" alt="${recipe.title}"><span class="h6 mt-2">ingrediënten</span>: ${recipe.ingredients} <hr><span class="h6  mt-2">bereiding</span>: ${recipe.description}</div>
            </div>
      </div>`;
        }
        html += '</div>';
        document.getElementById("recepten").innerHTML = html;
    })

    .catch(function (error) {
        // indien er een fout is, toon in de console dan wat er misloopt
        console.error("Error with message: " + error)
    });