const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)

// AOS
// AOS.refreshHard();
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// const dishGridEl = Array.from(document.querySelectorAll('#dishGrid'));
// if (dishGridEl.length > 0){
//   // console.log(dishGridEl)
//   dishGridEl.forEach(item => {
//     item.setAttribute('data-aos', 'fade-up');
//   })
// }


// code for Search bar 

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
icon.addEventListener('click', function icon(){
    search.classList.toggle("active");
});

const clear = document.querySelector(".clear");
clear.onclick = c ;
 function c() {
  
   document.getElementById('mysearch').value = "";
   
}

// onclick="document.getElementById('mysearch').value = ''; "


// js code for filter section  

  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //button class  code 
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText 
      if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active1");
      }
      else {
        button.classList.remove("active1");
      }
      if(button.innerText.toUpperCase() == "SUSHI ROLLS"){
        button.classList.add("active1");
      }
    });
    /*
   console.log(document.querySelector(".Entrees-title"));
    
    //select all cards 
    let elements =document.querySelectorAll(".dishGrid__item");
    let title =document.querySelector(".dishGrid__title");
    //loop through all cards 
    elements.forEach((element) => {
      //display all cards on "all" button click 
      if(value == "All"){
        element.classList.remove("hide");
        title.classList.remove("hide")
      }
      else{
        //check if element contains category class 
        if(element.classList.contains(value)){
          //display element based on category 
          element.classList.remove("hide");
          //display title 
          if(title.classList.contains(value)){
            title.classList.remove("hide");
          }
        }
        else{
          //hide other elements 
          element.classList.add("hide");
          title.classList.add("hide");
        }
      }
    });
*/
     //hide the div before footer 
     let beforFooter = document.querySelector(".before-footer");
     beforFooter.classList.add("hide");
     //select all cards 
     let sections = document.querySelectorAll(".section");
     let elements =document.querySelectorAll(".dishGrid__item");
     let titles =document.querySelectorAll(".dishGrid__title");
    //loop through all cards 
    sections.forEach((section) => {
      //display all cards on "all" button click 
      if(value == "All"){
        beforFooter.classList.remove("hide");
        section.classList.remove("hide");
        //remove .hide from all titles
        titles.forEach((title) => {
          if(value == "All"){
            title.classList.remove("hide");
          }
          }); 
        //remove .hide from all elements
        elements.forEach((element) => {
          //display all cards on "all" button click 
          if(value == "All"){
            element.classList.remove("hide");
          }});
      }
      else{
       //console.log(value);
        //check if element contains category class 
        if(section.classList.contains(value)){
          //console.log(section.classList.contains(value));
          //display section based on category 
          section.classList.remove("hide");
          console.log(section);
          section.style.cssText="padding-bottom: 10rem;";
          //console.log(section);
          //section.style.cssText="padding-bottom: 50px;";
           elements.forEach((element) => {
            if(element.classList.contains(value)){
              //display element based on category 
              element.classList.remove("hide");
            }
            }); 
            titles.forEach((title) => {
              if(title.classList.contains(value)){
                //display element based on category 
                title.classList.remove("hide");
              }
              });
        }
        else{
          //hide other elements 
          //element.classList.add("hide");
          section.classList.add("hide");
        }
      }
    });

    /*
    //select all cards 
    let elements =document.querySelectorAll(".dishGrid__item");
    //let title =document.querySelector(".dishGrid__title");
    //loop through all cards 
    elements.forEach((element) => {
      //display all cards on "all" button click 
      if(value == "All"){
        element.classList.remove("hide");
      }
      else{
        //check if element contains category class 
        if(element.classList.contains(value)){
          //display element based on category 
          element.classList.remove("hide");
          title.classList.remove("hide");
        }
        else{
          //hide other elements 
          element.classList.add("hide");
        }
      }
    });
    */
  }

  //search onclick event 
  var input = document.getElementById("mysearch");
  input.addEventListener("keypress",function(event) {
    if(event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-btn").click();
    }
  });

  //
/*
  
    document.getElementById("search-btn").addEventListener("click", ()=> {
    //initializations
    let searchInput = document.getElementById("mysearch").value;
    let elements = document.querySelectorAll(".dishGrid__item__title");
    let dishes =document.querySelectorAll(".dishGrid__item");

    //loop through all elements 
    elements.forEach((element,index) => {
      //check if text includes the search value 
      if(element.innerText.includes(searchInput.toUpperCase())){
        //display matching dish 
        dishes[index].classList.remove("hide");
      }
      else{
        //hide others 
        dishes[index].classList.add("hide");
      }
    });
  });
*/

document.getElementById("search-btn").addEventListener("click", function click()  {
  //initializations
  let searchInput = document.getElementById("mysearch").value;
  let elements = document.querySelectorAll(".dishGrid__item__title");
  let dishes =document.querySelectorAll(".dishGrid__item");
  let sections = document.querySelectorAll(".section");
  // padding of page title 
  let pageTitleText = document.querySelector(".page__title__text");
  pageTitleText.style.cssText="padding-bottom: 40px";

  console.log("-----------------------------------------------------------------");
  //set the section padding's to 0 
  sections.forEach((section) => {
    section.style.cssText="padding: 0px;";
  });
  //show the div before-footer
  let beforFooter = document.querySelector(".before-footer");
  beforFooter.classList.remove("hide");
  // hide all dishes 
  dishes.forEach((dish) => {
    dish.classList.add("hide");
  });
  //remove dish titles
  let titles =document.querySelectorAll(".dishGrid__title");
  titles.forEach((title) => {
    title.classList.add("hide");
  }); 


  console.log(searchInput);
  //console.log(elements);
  //console.log(dishes);

  //loop through all elements 
  elements.forEach((element,index) => {
    console.log("the index : "+index);
    console.log("element.innerText : "+element.innerText.toUpperCase());
    if(element.innerText.toUpperCase().includes(searchInput.toUpperCase())){
      console.log("the condition : "+element.innerText.includes(searchInput.toUpperCase()));
      //display matching dish 
      dishes[index].classList.remove("hide"); 
      //dishes[index].style.cssText="visibility: visible;";
      //console.log(dishes[index]);
    }
    else{
      //hide others 
      dishes[index].classList.add("hide");
      console.log(dishes[index]);
    }
  });
  
});
  //Initially display all products
  window.onload = () => {
    filterProduct("All");
  };

  var j = 1 ;
  var verifiedIndex = -1;
  let elements1 = document.querySelectorAll(".dishGrid__item__order");
  //console.log(elements1);
  //js code for add and delete button 
  function AddOrDelete(value,id,index){
    let order_dishes = document.querySelectorAll(".dishGrid__item__order");
    let addButtons = document.querySelectorAll("#add-btn");
    let deleteButtons = document.querySelectorAll("#delete-btn");
    let shopping = document.querySelector('.li-order-a');
    let num = document.querySelectorAll(".num");

    //litle animation for order tag 
    if(value == 'add'){
      console.log(value);
      num[index-1].innerText = 1;
      total_Price();
      // add style to add-button
      if(verifiedIndex !== index){
        j = 1;
      }
       console.log("j eqaul " +j);
       if(j == 1){
        //console.log(addButtons[[index-1]]);
        shopping.style.cssText="animation-name: order-hover;animation-duration:1s;";
        //console.log(shopping);
 
      setTimeout(function(){
         shopping.removeAttribute("style");
       },1100);
       addButtons[index-1].style.cssText="background: var(--color-1);	color: var(--background-2);";
       verifiedIndex = index;
       }
      j++;

      // remove hide from dish order
      //console.log(addButtons[index-1].hasAttribute("style"));
      
      if(addButtons[index-1].hasAttribute("style")){
        //console.log(order_dishes[index-1]);
        order_dishes[index-1].classList.remove("hide");
      }
      
    }
    if(value == 'delete'){
      num[index-1].innerText = 0;
      total_Price();
      console.log(value);
      console.log("j eqaul " +j);
      console.log("index equal "+index);


      shopping.style.cssText="animation-name: order-hover;animation-duration:1s;";
      //console.log(shopping);
 
       setTimeout(function(){
        shopping.removeAttribute("style");
        },1100);
      
        addButtons[index-1].removeAttribute("style");
        j = 1;

        if(!addButtons[index-1].hasAttribute("style")){
          //console.log(order_dishes[index-1]);
          order_dishes[index-1].classList.add("hide");
        }
        
    }



  















    /*
    let elements = document.querySelectorAll(".dishGrid__item__order");
    console.log(elements);
    if(value == "add"){
      elements.forEach((element) => {
        //console.log(element);
        if(element.classList.contains(id)){
          console.log(element.classList.contains(id));
          element.classList.remove("hide");
        }
      });
      
    }
    */
  }






  var shopping = document.querySelector('.li-order-a');
  //console.log(shopping);

  function cl() {
    let beforFooter = document.querySelector(".before-footer");
    // hide the menu 
    let search_bar = document.getElementById("search_bar");
    let filter = document.getElementById("filter");
    let page_title = document.getElementById("page__title");
    let dish_title =document.querySelectorAll(".dishGrid__title");
    let dishes = document.querySelectorAll("#dishGrid");
    //console.log(dishes);
    //console.log(dish_title);
    search_bar.classList.toggle("hide1");
    filter.classList.toggle("hide1");
    page_title.classList.toggle("hide1");
    dishes.forEach((dish) => {
      dish.classList.toggle("hide1");
    });
    dish_title.forEach((title) => {
      title.classList.toggle("hide1");
    });
    if(page_title.classList.contains("hide1")){
      beforFooter.classList.add("hide1");
    }
    else {
      beforFooter.classList.remove("hide1");
    }


    // hide the orders 
    var areHide = 0 ;
    let order_section = document.getElementById("order_section");
    let page_title_order = document.getElementById("page__title__order");
    let order_dishes = document.querySelectorAll(".dishGrid__item__order");
    let total_price = document.querySelector(".total-price");
    //console.log(page_title_order);
    page_title_order.classList.toggle("hide");
    order_section.classList.toggle("hide");
    //console.log(order_dishes);
    order_dishes.forEach((dish) => {
      if(dish.classList.contains("hide")){
        areHide++;
      }
    });
    let noOrder = document.querySelector(".no-order");
    if(areHide == 30 ){
      noOrder.classList.remove("hide");
    }
    else {
      noOrder.classList.add("hide");
      total_price.classList.remove("hide");
    }
    //console.log(areHide);
    
  }
  shopping.addEventListener('click' , cl);


  // js for increment and decrement 
  let num = document.querySelectorAll(".num");
 var number = 1;
  function increment(value,index){
    if(value == 'plus'){
     // alert("plus");
      number = parseInt(num[index-1].innerText);
      number++;
      console.log(num[index-1]);
      console.log( parseInt(num[index-1].innerText));
      num[index-1].innerText = number;



      total_Price();
      console.log("appel");
    }
  }

  function decrement(value,index){
    let order_dishes = document.querySelectorAll(".dishGrid__item__order");
    let total_price = document.querySelector(".total-price");
    if(value == 'minus'){
     // alert("minus");
      number = parseInt(num[index-1].innerText);
      number--;
      //console.log(num[index-1]);
      console.log( parseInt(num[index-1].innerText));

      if(number == 0){
        order_dishes[index-1].classList.add("hide");
        AddOrDelete('delete','id',index);
        //console.log("0000000000000000000");
      }
      num[index-1].innerText = number;
      
      //to show no order and hide total price
      let a = 0;
      order_dishes.forEach((dish) => {
        if(dish.classList.contains("hide")){
          a++;
        }
      });
      let noOrder = document.querySelector(".no-order");
      if(a == 30 ){
        noOrder.classList.remove("hide");
        total_price.classList.add("hide");
      }
      else {
        noOrder.classList.add("hide");
        total_price.classList.remove("hide");
      }

      total_Price();
    }
  }
   var totalPrice = 0 ; 
  function total_Price() {
     
     totalPrice = 0 ;
    let price = document.querySelectorAll(".food_price");
    let showPrice = document.querySelector(".total_price");
    let A = 0 ;

    //console.log(parseInt(num[index-1].innerText));
    //console.log(parseInt(price[index-1].innerText));

   // A = parseInt(num[index-1].innerText) * parseInt(price[index-1].innerText);
    price.forEach((p,index) => {
      
      console.log(index);
      console.log(parseInt(p.innerText)); // price 
      console.log("the quatity "+parseInt(num[index].innerText)); //quantity

      A = A + parseInt(p.innerText) * parseInt(num[index].innerText) ;
      
    });

/*
    if(value == 'plus'){
        A = parseInt(num[index-1].innerText) * parseInt(price[index-1].innerText);
      }
      */
     console.log("A equal "+A);
      totalPrice += A;
      showPrice.innerText = totalPrice;
      

  }

  

