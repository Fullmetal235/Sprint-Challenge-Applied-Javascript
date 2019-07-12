// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get(` https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    for (let i = 0; i < response.data.articles.length; i++) {
        //creating elements
      const card = document.createElement('div');
      const headline = document.createElement('div');
      const author = document.createElement('div')
      const img = document.createElement('img')
      const span = document.createElement('span')
      //creating class
      card.classList.add('card')
      headline.classList.add('headline')
      author.classList.add('author')
      //setting content
      card.textContent = response.data.articles[i]
      document.querySelector('.cards-container').appendChild(card)
      //returning HTML
      card.innerHTML = `<div class="card">
         <div class="headline">${headline}</div>
         <div class="author">
          <div class="img-container">
             <img src=${authorPhoto} />
           </div>
           <span>By ${authorName}</span>
         </div>
       </div>`
       return card;
    }
  })
  .catch(error => {
    console.log("Error: ", err)
  })
