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
function onStatisticsClicked(event) {
    valCharCount = event.length;
    valSpacesCount = (event.split(" ").length - 1);
    valVowelsCount = ((event.match(/[aeiou]/gi)).length);
    valConsonantsCount = ((event.match(/[bcdfghjklmnpqrstvwxz]/gi)).length);
    valWordsCount = (event.split(" ").length);
    console.log('onStatisticsClicked called');
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function
    console.log('onRemoveWordsClicked called');
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
