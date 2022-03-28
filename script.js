const quoteContainer = document.getElementById('quote-container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const quoteSymbol = document.getElementById('quote-symbol')
const loader = document.getElementById('loader');
const themeName = document.getElementById('theme-name');
const themeSymbol = document.getElementById('theme-symbol');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');
 
function changeTheme() {
    if (toggleSwitch.checked) {
        document.documentElement.setAttribute('dataTheme', 'light')
        lightMode();
    } else {
        document.documentElement.setAttribute('dataTheme', 'dark')
        darkMode();
    }
    return
}

function lightMode() {
    console.log('light yep');
    body.style.backgroundImage = "linear-gradient(180deg, rgba(50,58,69,0.3), rgba(50,58,69,0.3)), url('images/225-2255545_windows-10-wallpapers-snow.jpg')";
    themeSymbol.classList.replace('fa-moon', 'fa-sun');
    themeName.textContent = 'Light Mode';
}

function darkMode() {
    body.style.backgroundImage = "linear-gradient(180deg, rgba(50,58,69,0.55), rgba(50,58,69,0.74)), url('images/2005304.jpg')";
    themeSymbol.classList.replace('fa-sun', 'fa-moon',);
    themeName.textContent = 'Dark Mode';
}

function loading() {
quoteContainer.classList.add('hidden');
loader.classList.remove = ('hidden');
}

function completeLoading() {
    quoteContainer.classList.remove('hidden');
    loader.classList.add('hidden');
 }

function newQuote() {
    loading();
    let quotes = data[Math.floor(Math.random() * data.length)];
    quote.textContent = quotes.text;
    if (quotes.author === null) {
        author.textContent = "Unknown";
    } else {
        author.textContent = quotes.author;
    }
    completeLoading(); 
}

function giveNewQuote() {  
    newQuote();
}

function twitQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        data = await response.json();
        newQuote();  
    } catch (error) {
        //   catch error here
    }
}

getQuotes();
changeTheme();

// event Listners
btn2.addEventListener('click', giveNewQuote);
btn1.addEventListener('click', twitQuote);
toggleSwitch.addEventListener('change', changeTheme);


