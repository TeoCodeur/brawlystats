document.addEventListener('input', calculateTotal);

const values = {
    brawleur: 0.05995,
    skins_rare: 1.739855,
    skins_super_rare: 4.739605,
    skins_epique: 8.939255,
    skins_mythique: 11.939005,
    skins_legendaire: 17.938505,
    skins_hypercharge: 17.938505,
    skins_argent: 46.15,
    skins_or: 46.15,
    hypercharge: 23.075,
    equipement_rare: 4.615,
    equipement_epique: 6.9225,
    equipement_mythique: 9.23,
    emotes_commune: 0.539955,
    emotes_rare: 1.139905,
    emotes_epique: 2.339805,
    emotes_collector: 2.339805,
    icones_joueur: 1.139905,
    tags: 1.43988,
    pieces: 0.004615,
    gemmes: 0.05995,
    blings: 0.001787851,
    trophees: 0.046666667,
    points_pouvoir: 0.011999,
    doubleurs_xp: 0.001499875
};

function calculateTotal() {
    let total = 0;
    for (let key in values) {
        const input = document.getElementById(key);
        const euro = input.value * values[key];
        total += euro;
        document.getElementById(`${key}-euro`).textContent = `${euro.toFixed(2)} €`;
    }
    document.getElementById('total-euro').textContent = `${total.toFixed(2)} €`;
}

