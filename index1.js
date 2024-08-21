



cardDataPage1 = [
    { category: 'Adventure', title: 'Assasin Creed', imgSrc: 'img/assassin creed.jpg'  },
    { category: 'Action', title: 'Hitman', imgSrc: 'img/hitman game.jpg' },
    { category: 'Action', title: 'Call Of Duty', imgSrc: 'img/c of duty.jpg'},
    { category: 'Sports', title: 'FC 24 Football', imgSrc: 'img/Get fc 24 for free.jpg' },
    { category: 'Adventure', title: 'GTA5', imgSrc: 'img/gta 5.jpg', pastprice: '$53', soldeprice:'$41'},
    { category: 'Adventure', title: 'Last Of Us', imgSrc: 'img/last of us.jpg'},
]



function generateCardspage1(){
    let containers = document.querySelector('#section2cards')

    containers.innerHTML=''

cardDataPage1.forEach(card => { 

    containers.innerHTML += `
    <div class="col">
        <div id="projectcards" class="card" >
            <img class="card-img" src="${card.imgSrc}" >
            <div class="card-body">
              <h5 class="card-category">${card.category}</h5>
              <h1 class="card-title">${card.title}</h1>
            </div>
            <a href="#" class="btn ">EXPLORE</a>
        </div>
    </div>
    `
})
    
    console.log(containers)
}
generateCardspage1()





let containers = document.querySelectorAll('#section2cards')

containers.forEach(section2cards =>{
    const cards = section2cards.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover',() => {
        const heading = card.querySelector('h1');
        const btn = card.querySelector('a')

            heading.style.color = 'rgb(18, 146, 252)'
            btn.style.backgroundColor = 'rgb(18, 146, 252)'
            btn.style.color = 'white'
        
    });
    card.addEventListener('mouseout', () => {
        const heading = card.querySelector('h1');
        const btn = card.querySelector('a')
        
            heading.style.color = ''
            btn.style.backgroundColor = ''
            btn.style.color = ''
        
    });
    card.addEventListener('click', function(){

            let cardtitle = card.querySelector('.card-title' ).textContent
            let cardcategory = card.querySelector('.card-category').textContent
            let cardimg  = card.querySelector('.card-img').src
            
        localStorage.setItem('titleCard' , cardtitle );
        localStorage.setItem('imgCard' , cardimg  );
        localStorage.setItem('cardCategory' , cardcategory  );
    });
});
});




   
//    // go to the payment page 
//        window.location.href = 'index3.html'
       






let cardCategories = document.querySelectorAll('#Categories-card')
console.log(cardCategories)
cardCategories.forEach(categories => {
    let cards1 = categories.querySelectorAll('.card')
    cards1.forEach(card1 => {
        card1.addEventListener('mouseover' , () => {
            let header = card1.querySelector('.card-header')
            header.style.paddingBottom = '30px'
            header.style.backgroundColor = 'rgb(31, 154, 255)'

        });
        card1.addEventListener('mouseout' , () => {
            let header = card1.querySelector('.card-header')
            header.style.paddingBottom = ''
            header.style.backgroundColor = ''
        });
    })
    
})