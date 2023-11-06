// const strainsURL = 'data/strains.json';
const ediblesStrainsPreRollsURL = 'data/ediblesStrainsPreRolls.json';
// const preRollsURL = 'data/preRolls.json';

// Function to fetch strains
function fetchStrains(endpoint) {
    return fetch(ediblesStrainsPreRollsURL)
        .then(response => response.json())
        .then(data => data[endpoint]);
}

fetchStrains('strains')
    .then(strains => {
        console.log('Strains:', strains);
        displayStrain(strains);
        // Perform operations with strains data
    })
    .catch(error => console.error('Error fetching strains:', error));
            function displayStrain(strains){
                const strainMenu = document.querySelector('.strain-menu');

                strains.forEach(strain => {
                    const strainCard = document.createElement('div');
                    strainCard.classList.add('strain-card');
                    strainCard.innerHTML = `<div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                          <label class="form-check-label" for="flexCheckDefault">
                                            Click to Add
                                          </label>
                                        </div>
                                            <h2 class="strain-name">${strain.name}</h2>
                                            <p class="strain-type" style="background-color: #C7CEDB; width: 65px; text-align: center; border-radius: 15px;">${strain.type}</p>
                                            <p class="strain-description">${strain.description}</p>
                                            <p class="strain-thc" style="background-color: #94849B; width: 100px; text-align: center; border-radius: 15px;">THC: ${strain.thcPercentage}</p>
                                            <p class="strain-price">1/8th: ${strain.price}</p>
                                            <br>
<hr>`;
                    strainMenu.appendChild(strainCard);
                })
            }

// Fetch Edibles
function fetchEdibles(edibles) {
    return fetch(ediblesStrainsPreRollsURL)
        .then(response => response.json())
        .then(data => data[edibles]);
}
fetchEdibles('edibles')
    .then(edibles => {
        console.log('Edibles:', edibles);
        displayEdibles(edibles);
        // Perform operations with edibles data
    })
    .catch(error => console.error('Error fetching edibles:', error));
function displayEdibles(edibles){
    const ediblesMenu = document.querySelector('.edibles-menu');

    edibles.forEach(edible => {
        const ediblesCard = document.createElement('div');
        // console.log(`${edible.name}`)
        ediblesCard.classList.add('edibles-card');
        ediblesCard.innerHTML = `<div class="form-check">                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                              <label class="form-check-label" for="flexCheckDefault">
                                             Click to Add
                                           </label>
                                         </div>

                                            <h2 class="edible-name" style="color: red;">${edible.name}</h2>
                                            <p class="edible-type">Type: ${edible.type}</p>
                                            <p class="edible-description">Description: ${edible.description}</p>
                                            <p class="edible-price">THC: ${edible.price}</p>
                                            <hr>`;
        ediblesMenu.appendChild(ediblesCard);

        console.log(`${edible.type}`)

    })
}

// Fetch preRolls
function fetchPreRolls(endpoint) {
    return fetch(ediblesStrainsPreRollsURL)
        .then(response => response.json())
        .then(data => data[endpoint]);
}

// Example usage
fetchPreRolls('preRolls')
    .then(preRolls => {
        // console.log('PreRolls:', preRolls);
        // Perform operations with strains data
    })
    .catch(error => console.error('Error fetching preRolls:', error));