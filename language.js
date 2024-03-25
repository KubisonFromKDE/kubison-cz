const translations = {};

// language.js
const languageSelect = document.getElementById('language');
const projectsHeading = document.getElementById('projects-heading');
const soundboardLink = document.getElementById('soundboard-link');
const gamesLink = document.getElementById('games-link');
const spotifyPlaylistsLink = document.getElementById('spotify-playlists-link');
const languageSelectLabel = document.getElementById('language-select-label');
const webstatusText = document.getElementById('webstatus-text');

// Název webovky
const pageTitle = document.title;

// Funkce pro aktualizaci názvu webovky
function updatePageTitle() {
    const selectedLanguage = languageSelect.value;
    const translation = translations[selectedLanguage];
    if (translation && translation.pageTitle) {
        document.title = translation.pageTitle;
        console.log("Název webovky byl aktualizován na:", translation.pageTitle);
    } else {
        console.log("Pøeklad pro název webovky nebyl nalezen.");
    }
}

// Naèítání pøekladù ze souboru dle vybraného jazyka
function loadTranslations(lang) {
    fetch(`translations.${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations[lang] = data; // Uložení pøekladù do promìnné translations pro daný jazyk
            projectsHeading.textContent = data.projects;
            soundboardLink.textContent = data.soundboard;
            gamesLink.textContent = data.games;
            spotifyPlaylistsLink.textContent = data.spotifyPlaylists;
            languageSelectLabel.textContent = data.languageSelectLabel;
            webstatusText.textContent = data.webstatusText;
            
            updatePageTitle(); // Zde voláme funkci pro aktualizaci názvu webovky
        });
}


languageSelect.addEventListener('change', function () {
    const selectedLanguage = languageSelect.value;
    loadTranslations(selectedLanguage);
});

// Defaultnì naètìte pøeklady pro angliètinu
loadTranslations('en');
