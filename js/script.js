/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



//Array to hold quotes, sources,citations,years and tags

let quotes = [
  {
    quote: 'Aim for the moon. If you miss, you may hit a star.',
    source: ' W.Clement Stone',
    citation: 'www.brainquote.com',
    tags: 'Inspiration',
  
  },

  {
    quote: 'I am not afraid. I was born to do this.',
    source: ' Joan Of Arc',
    year: ' 1412-1431',
    tags: 'Inspiration',
  

  },

  {
    quote: 'I can, therefore I am.',
    source: 'Simone Weil',
    citation: 'www.brainquote.com',
    year: ' 1909-1943',
    tags: 'Inspiration',
  
  },

  {
    quote: 'You are never too old to start another goal or to dream a new dream',
    source: ' C.S. Lewis',
    citation: 'www.brainquote.com',
    year: ' 1898-1963',
    tags: 'Inspiration',
  },

  {
    quote: 'You must do the things you think you cannot do.',
    source: ' Eleanor Roosvelet',
    citation: 'www.brainquote.com',
    year: ' 1884-1962',
    tags: 'Inspiration'
  }
];
//Function to generate random color

function randomRGB() {
  return Math.floor(Math.random()*256)
}
 //Create the 'getRandomQuote' function to store and return random quote

function getRandomQuote(quotes) {
  let InsQuotes = Math.floor(Math.random() * quotes.length);
  let RandomQuote = quotes[InsQuotes]
  return RandomQuote;
}
let result = getRandomQuote(quotes);

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
//Refresh or reload page
function refresh()
{
  let timer = setinterval(printQuote,3000);
}
function printQuote() {
    let randomQuote = getRandomQuote(quotes);
    let message = "";
    let x = randomRGB();
    let y = randomRGB();
    let z = randomRGB();
    var bgColor = "rgb("+ x +"," + y +","+ z+")";
    message += "<p class='quote'>" + randomQuote.quote + '</p>';
    message += "<p class='source'>" + randomQuote.source ;
    if (randomQuote.citation) {
      message += "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    if (randomQuote.year) { 
      message += "<span class='year'>" + randomQuote.year + "</span>";
    }
    message +="</p>";

    //Add tags
    message += "<span class='tags'>" + randomQuote.tags +"</span>";
    message += "</p>";

    document.body.style.background = bgColor;
    document.getElementById('quote-box').innerHTML = message;
}
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
refresh();

