const translations = {};

// language.js
const languageSelect = document.getElementById('language');
const projectsHeading = document.getElementById('projects-heading');
const soundboardLink = document.getElementById('soundboard-link');
const gamesLink = document.getElementById('games-link');
const spotifyPlaylistsLink = document.getElementById('spotify-playlists-link');
const languageSelectLabel = document.getElementById('language-select-label');
const webstatusText = document.getElementById('webstatus-text');

// Title website
const pageTitle = document.title;

// Function to update the website title
function updatePageTitle() {
    const selectedLanguage = languageSelect.value;
    const translation = translations[selectedLanguage];
    if (translation && translation.pageTitle) {
        document.title = translation.pageTitle;
        console.log("The website name has been updated to:", translation.pageTitle);
    } else {
        console.log("Translation not found for the website title.");
    }
}

// Loading translations from a language files
function loadTranslations(lang) {
    fetch(`translations.${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations[lang] = data;
            projectsHeading.textContent = data.projects;
            soundboardLink.textContent = data.soundboard;
            gamesLink.textContent = data.games;
            spotifyPlaylistsLink.textContent = data.spotifyPlaylists;
            languageSelectLabel.textContent = data.languageSelectLabel;
            webstatusText.textContent = data.webstatusText;
            
            updatePageTitle(); // Call function to update the website title
        });
}


languageSelect.addEventListener('change', function () {
    const selectedLanguage = languageSelect.value;
    loadTranslations(selectedLanguage);
});

// Default loads English language
loadTranslations('en');
