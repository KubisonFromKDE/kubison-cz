const translations = {};

// language.js
const languageSelect = document.getElementById('language');
const projectsHeading = document.getElementById('projects-heading');
const soundboardLink = document.getElementById('soundboard-link');
const gamesLink = document.getElementById('games-link');
const spotifyPlaylistsLink = document.getElementById('spotify-playlists-link');
const languageSelectLabel = document.getElementById('language-select-label');
const webstatusText = document.getElementById('webstatus-text');

// N�zev webovky
const pageTitle = document.title;

// Funkce pro aktualizaci n�zvu webovky
function updatePageTitle() {
    const selectedLanguage = languageSelect.value;
    const translation = translations[selectedLanguage];
    if (translation && translation.pageTitle) {
        document.title = translation.pageTitle;
        console.log("N�zev webovky byl aktualizov�n na:", translation.pageTitle);
    } else {
        console.log("P�eklad pro n�zev webovky nebyl nalezen.");
    }
}

// Na��t�n� p�eklad� ze souboru dle vybran�ho jazyka
function loadTranslations(lang) {
    fetch(`translations.${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations[lang] = data; // Ulo�en� p�eklad� do prom�nn� translations pro dan� jazyk
            projectsHeading.textContent = data.projects;
            soundboardLink.textContent = data.soundboard;
            gamesLink.textContent = data.games;
            spotifyPlaylistsLink.textContent = data.spotifyPlaylists;
            languageSelectLabel.textContent = data.languageSelectLabel;
            webstatusText.textContent = data.webstatusText;
            
            updatePageTitle(); // Zde vol�me funkci pro aktualizaci n�zvu webovky
        });
}


languageSelect.addEventListener('change', function () {
    const selectedLanguage = languageSelect.value;
    loadTranslations(selectedLanguage);
});

// Defaultn� na�t�te p�eklady pro angli�tinu
loadTranslations('en');
