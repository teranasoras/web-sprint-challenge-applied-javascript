// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function makecard(obj){
    const card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click', function(event){
        console.log(obj.headline)
    });

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = obj.headline;
    card.append(headline);

    const author = document.createElement('div');
    author.classList.add('author');
    card.append(author);

    const imgcontainer = document.createElement('div');
    imgcontainer.classList.add('img-container');
    author.append(imgcontainer);

    const authorimage = document.createElement('img');
    authorimage.src = obj.authorPhoto;
    imgcontainer.append(authorimage);
    

    const name = document.createElement('span');
    name.textContent = obj.authorname;
    author.append(name);

    return card;

}
const cardcon = document.querySelector('.cards-container')
axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(stuff => {
    const info = Object.entries(stuff.data.articles);
    info.forEach(item =>{
        let newarray = item[1];
        newarray.forEach(object =>{
            cardcon.appendChild(makecard(object));
        })
    })
})
.catch(err =>{
  console.log(err)
})