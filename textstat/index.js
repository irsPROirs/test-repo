/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
 var valCharCount;
 var valSpacesCount;
 var valVowelsCount;
 var valConsonantsCount;
 var valWordsCount;
 var valOddWords;
function onStatisticsClicked() {
   
    valCharCount = txt.length;
    valSpacesCount = (txt.split(" ").length - 1);
    valVowelsCount = ((txt.match(/[aeiou]/gi)).length);
    valConsonantsCount = ((txt.match(/[bcdfghjklmnpqrstvwxz]/gi)).length);
    valWordsCount = (txt.split(" ").length);
    // document.getElementById("valCharCount").value = ;
    document.getElementById("valCharCount").value = valCharCount;
    document.getElementById("valSpacesCount").value = valSpacesCount;
    document.getElementById("valVowelsCount").value = valVowelsCount;
    document.getElementById("valConsonantsCount").value = valConsonantsCount;
    document.getElementById("valWordsCount").value = valWordsCount;
    console.log('onStatisticsClicked called');
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked() {
    valOddWords = txt.split(" ").filter(i=>!(i%2))
    document.getElementById("valOddWords").value = valOddWords;
    console.log('onRemoveWordsClicked called');
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);

