// fetch word data
async function fetchWordData(word) {
  const res = await fetch(` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const wordData = await res.json()

  return wordData
}

// Display data
function displayData(data) {
  data.forEach(obj => {
    const word = obj.word

    // Pronunciation
    const phonetic = obj.phonetic
    const phonetics = obj.phonetics
    // Pronunciation audio playback
    let phoneticAudioAU = phonetics[0].audio
    let phoneticAudioUS = phonetics[1].audio

    // Definitions, partOfSpeech & synonyms
    const meanings = obj.meanings
    let partOfSpeech = meanings[0].partOfSpeech
    const definitions = []
    let synonyms = []
    meanings.forEach(meaning => {
      // Get definitions
      meaning.definitions.forEach(definition => {
        definitions.push(definition.definition)
      })

      // Get synonyms
      synonyms.push(...meaning.synonyms)
    });

    console.log(word)
    console.log(phonetic)
    console.log(phoneticAudioAU)
    console.log(phoneticAudioUS)
    console.log(partOfSpeech)
    console.log(definitions)
    console.log(synonyms)
  });
}

// Handle inputs and events
// Search functionality
async function init() {
  const data = await fetchWordData("duck")
  displayData(data)
}

init()
