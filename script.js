const biler = [
    {
        bilmaerke: "Suzuki Swift",
        billede: "images/Suzuki.png",
        billedtekst: "Billede af udlejningsbil",
        kategori: "Budget",
        personer: "4",
        kufferter: "0",
        lejepris: "DKK1400,00"
    },
    {
        bilmaerke: "Mazda CX3",
        billede: "images/Mazda.png",
        billedtekst: "Billede af udlejningsbil",
        kategori: "Mellemklasse",
        personer: "5",
        kufferter: "3",
        lejepris: "DKK1600,00"
    },
    {
        bilmaerke: "Citroën Grand C4 Picasso",
        billede: "images/Citroen.png",
        billedtekst: "Billede af udlejningsbil",
        kategori: "Minivan",
        personer: "7",
        kufferter: "4",
        lejepris: "DKK1800,00"
    }
];

const sektion = document.getElementById("bil_sektion");
const skabelon = document.getElementById('skabelon_output');

for (const bil of biler) {
    const klon = skabelon.content.cloneNode(true);
    const bilMM = klon.querySelector(".bilMM");
    const billedtag = klon.querySelector("img");
    const kategori = klon.querySelector(".kategori");
    const antalpersoner = klon.querySelector(".antalpersoner");
    const antalkufferter = klon.querySelector(".antalkufferter");
    const lejeudgift = klon.querySelector(".lejeudgift");

    billedtag.src = bil.billede;
    billedtag.alt = bil.billedtekst;
    bilMM.textContent = bil.bilmaerke;
    kategori.textContent += bil.kategori;
    antalkufferter.textContent += bil.kufferter;
    antalpersoner.textContent += bil.personer;
    lejeudgift.textContent = bil.lejepris;
    
    sektion.appendChild(klon);
}