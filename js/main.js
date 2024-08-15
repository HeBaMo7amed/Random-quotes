var greatQuotes = [
    {
      quote: " Imagination is everything. It is the preview of life's coming attractions.",
      person: " Albert Einstein"
    },
    {
      quote: " Nothing on earth can make up for the loss of one who has loved you ",
      person: "Selma Lagerlöf"
    },
   
    {
      quote:
        " It is during our darkest moments that we must focus to see the light.",
      person: "Aristotle"
    },
    {
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the hear ",
      person: "Helen Keller"
    },
    {
        quote: " Be yourself; everyone else is already taken",
        person: "Oscar Wilde"
      },
    {
      quote:
        "Don't worry when you are not recognized, but strive to be worthy of recognition ",
      person: "Abraham Lincoln"
    },
    {
      quote:
        " If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",
      person: "Oprah Winfrey"
    },
    {
        quote: " The unfed mind devours itself.",
        person: "Gore Vidal"
    },
    {
        quote: " I like this place and could willingly waste my time in it",
        person: "William Shakespeare"
    },
    {
        quote:
          " You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one ",
        person: "John Lennon"
    },
  ];
  
  var catrouna = "";
  function quotes() {
      var randomNumber = Math.floor(Math.random() * greatQuotes.length) + 1;
      catrouna = ` <div class=" ">
      <h2>${greatQuotes[randomNumber].quote}</h2> 
      <p> ~ ${greatQuotes[randomNumber].person} ~ </p>
  
  </div>`;
  
      document.getElementById("demo").innerHTML = catrouna;
 }
  