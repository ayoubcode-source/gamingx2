

     titleAadCart =   localStorage.getItem('titleAadCart'  );
     imgAddCard =   localStorage.getItem('imgAddCard' );
      priceAddCart = localStorage.getItem('priceAddCart' );

     

    
      let cardContainer =  document.querySelector('.addcardsection .cardcontainer')
        console.log(cardContainer)
        cardContainer.innerHTML = ''
        cardContainer.innerHTML = `
                <div class="row">
        <div class="col">
            <img src="${imgAddCard}" >
        </div>
        <div class="col">
            <h4>${titleAadCart}</h4>
            <h6>${priceAddCart}</h6>
        </div>
        <div class="col">
            <p class="gtyOfCards">5</p>
            <input type="submit" value="BUY NOW" class="submit-button">
        </div>
    </div>
        `;


        

