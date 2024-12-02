
let search = document.getElementById("search");
let dictForm = document.getElementById("search-bar");
console.log(dictForm);
dictForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    let word = document.getElementById("search").value;
    try {
        let resp = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
        let data = await resp.json();

        let wordInfo = data[0];
        let meanings = wordInfo.meanings;

        let output = `<h3>${wordInfo.word}:</h3>`;
        meanings.forEach(meaning => {
            output += `<h5>${meaning.partOfSpeech}</h5>`;
            meaning.definitions.forEach((def, index) => {
                output += `<p>${index + 1}. ${def.definition}</p>`;
                if (def.example) output += `<p><i>Example:</i> ${def.example}</p>`;
            });
        });

        document.getElementById("words").innerHTML = output;
    } catch (err) {
        alert("Word does not exist");
    }
});