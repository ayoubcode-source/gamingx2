

   
   
   
   
   let title = localStorage.getItem('selectedTitle');
        let img = localStorage.getItem('selectedImg');
        let pastprice = localStorage.getItem('selectedPprice');
        let soldprice = localStorage.getItem('selectedSprice');


        // document.addEventListener("DOMContentLoaded", function() {
 
        //         var form = document.querySelector('.form-inline')
        // console.log(form)

        // form.addEventListener('submit', function(event){
        //         event.preventDefault();
        // console.log(form)

        //         quantity = document.querySelector('.qty').value
        //         console.log(quantity)

          
        //         localStorage.setItem('titleAadCart' , title );
        //         localStorage.setItem('imgAddCard' , img  );
        //         localStorage.setItem('priceAddCart' , soldprice  );
                        
                
        //           window.location.href = 'index6.html'
        // })
        // });

      
       

function productDetail(){

        document.addEventListener('DOMContentLoaded', () => {
    
            let producttitle = document.querySelector('.title-shop-section .ourshop-nameproduct')
            producttitle.innerHTML = title
            console.log(producttitle)
            
            let productElement = document.querySelector('.product-details')
            let rowproduct = document.querySelector('.product-details #product-row')
            rowproduct.innerHTML = '';
                rowproduct.innerHTML += ` 
                <div id="product-img" class="col-4">
                <img  src="${img}">
            </div>
            <div class="col-6">
                  <h2 >
                  ${title} </h2>
                  <div class="product-price">
                    <p class="original-price">${pastprice}</p>
                    <h3 class="discounted-price">${soldprice}</h3>
                </div>
                <p>
                  An open-world action-adventure game, Assassin's Creed II takes place during the Italian Renaissance...
                </p>
                <form action = "index6.html" class="form-inline">
                    <input type="number" placeholder="1" class="qty" >
                  <input type="submit" class="addcartbutton" onclick="cardgenerate()" value ="ADD TO CART">  
                </form>
                <div class="game-detail">
                  <p>GAME ID: <a href="#">${title}</a></p>
                  <p>GENRE: <a href="#">Action,Team,Single</a></p>
                  <p>MULTI-TAGS: <a href="#">War,Battle,Royal</a></p>
                </div>
            </div>`;
            
        });
    
    }
    productDetail()

    function cardgenerate(){
        
       
           


               
        localStorage.setItem('titleAadCart' , title );
        localStorage.setItem('imgAddCard' , img  );
        localStorage.setItem('priceAddCart' , soldprice  );
                
        
          window.location.href = 'index6.html'
}


// function addcart(){
//         localStorage.clear()

//         localStorage.setItem('titleAadCart' , titleAadCart );
//         localStorage.setItem('imgAddCard' , imgAddCard  );
//         localStorage.setItem('priceAddCart' , priceAddCart  );  
        
//         window.location.href = 'index6.html'

// }



