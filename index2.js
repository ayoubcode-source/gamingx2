













let cardData = [
    { category: 'Adventure', title: 'Assasin Creed', imgSrc: 'img/assassin creed.jpg', pastprice: '$28', soldeprice:'$20' },
    { category: 'Action', title: 'Hitman', imgSrc: 'img/hitman game.jpg', pastprice: '$40', soldeprice:'$25'},
    { category: 'Action', title: 'Call Of Duty', imgSrc: 'img/c of duty.jpg', pastprice: '$65', soldeprice:'$30'},
    { category: 'Sports', title: 'FC 24 Football', imgSrc: 'img/Get fc 24 for free.jpg',pastprice: '$30', soldeprice:'$20' },
    { category: 'Action', title: 'Iron MAN', imgSrc: 'img/ironman.jpg', pastprice: '$53', soldeprice:'$41'},
    { category: 'Adventure', title: 'Spider MAN', imgSrc: 'img/spider-man.jpg', pastprice: '$35', soldeprice:'$30'},
    { category: 'Action', title: 'Valorant', imgSrc: 'img/valorant.jpg',pastprice: '$24', soldeprice:'$21' },
    { category: 'Adventure', title: 'GTA 5', imgSrc: 'img/gta.jpg',pastprice: '$110', soldeprice:'$85' },
    { category: 'Sports', title: 'NEED FOR SPEED', imgSrc: 'img/nfs.jpg',pastprice: '$120', soldeprice:'$85' },
    { category: 'Sports', title: 'DRIFT KING', imgSrc: 'img/driftking.jpg',pastprice: '$60', soldeprice:'$50' },
    { category: 'Sports', title: 'NBA 24', imgSrc: 'img/nba24.jpg',pastprice: '$140', soldeprice:'$105' },
    { category: 'Sports', title: 'NBA 25', imgSrc: 'img/nba25.jpg',pastprice: '$160', soldeprice:'$115' },
]   

// local variable
let c ;

function generateCards(){
let cardContainer = document.querySelector('#gameshop-card')

// cardContainer.innerHTML = '';


cardData.forEach(function (card) {


     cardElement = document.createElement('div')

    cardElement.classList.add('card');
    cardElement.classList.add(card.category); // Add category class for filtering
    cardElement.innerHTML = `
    <div class="game-price">
    <p  class="solde-price">${card.soldeprice}</p>
    <p  class="past-price">${card.pastprice}</p>
  </div>
  <img class = 'productImgSrc' src="${card.imgSrc}" >
  <div id="card-content" class="row">
    <div class="col-8">
      <p>${card.category}</p>
      <h5 class="card-title">${card.title}</h5>
    </div>
    <div class="col-2">
      <div class="btn"><i class="fa-solid fa-bag-shopping"></i></div>
    </div>
  </div>
    `;
    cardContainer.appendChild(cardElement); 

    let title = card.title
    let img = card.imgSrc
    let pastPrice = card.pastprice
    let soldePrice = card.soldeprice
    let category = card.category
    

            


            // localStorage.removeItem('selectedTitle', title);
            // localStorage.removeItem('selectedCategory', category);
            // localStorage.removeItem('selectedImg',  img);
            // localStorage.removeItem('selectedPprice',  pastPrice);
            // localStorage.removeItem('selectedSprice',  soldePrice);
});


}


function filterCards(category) {
    console.log(category)
    const cards = document.querySelectorAll('.card');
 console.log(cards)


    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            if (card.classList.contains(category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

generateCards()


let ourshop = document.querySelector('.ourshop')
let cardContainer = document.querySelector('#gameshop-card')
let allCards = cardContainer.querySelectorAll('.card')
let titleshopsection = document.querySelector('.title-shop-section')
console.log(titleshopsection)


    allCards.forEach(function clicked(product){

             product.addEventListener('click', function(){
            let titleContent = product.querySelector('.card-title').textContent
            let soldPriceContent = product.querySelector('.solde-price').textContent

            let pastPriceContent = product.querySelector('.past-price').textContent

            let imgContent  = product.querySelector('.productImgSrc').src
                
            localStorage.setItem('selectedTitle', titleContent);
            localStorage.setItem('selectedImg',  imgContent);
            localStorage.setItem('selectedPprice',  pastPriceContent);
            localStorage.setItem('selectedSprice',  soldPriceContent);
            // go to the payment page 
                window.location.href = 'index3.html'
                

        
             })

        })








        // <div class="col">
        //     <div id="projectcards" class="card" >
        //         <img src="img/assassin creed.jpg" >
        //         <div class="card-body">
        //           <h5 class="card-title">Adventure</h5>
        //           <h1>Assasin Creed</h1>
        //         </div>
        //         <a href="#" class="btn ">EXPLORE</a>
        //     </div>
        // </div>















const paginationItems = document.querySelectorAll('.pagination button');
const paginationLinks = document.querySelectorAll('.pagination ul ');

paginationItems.forEach(item => {
  
    // Onclick event
    item.addEventListener('click', () => {
        // Clear the active state from all items
        paginationItems.forEach(i => i.style = '#ff3939'); // Reset others

        // Set the clicked item as active
        item.style.backgroundColor = 'rgb(0, 101, 184)'; // Active background color
        item.style.color = 'white'
    });
});
paginationLinks.forEach(link => {
  
    // Onclick event
    link.addEventListener('click', () => {
        // Clear the active state from all items
        paginationLinks.forEach(i => i.style.color = 'white'); // Reset others

        // Set the clicked item as active
        link.style.color = 'rgb(0, 101, 184)'
    });
});

















