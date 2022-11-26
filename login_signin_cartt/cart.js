 var bagitem=JSON.parse(localStorage.getItem("addTobag")) || []
 console.log(bagitem)
document.querySelector("#checkoutIcon").addEventListener("click",Myfun)



 
 var count=localStorage.getItem("Quantity") || 1;


 var recomended=[
     {
     imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw058417f1/hires/026402543.jpg?sh=400&q=75&yocs=o_s_",
     name:"Pink Pineapple Sunrise",
     type:"Ultimate Hydration Body Cream",
     price: 15.50,
     offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb3ceb7dc/hires/026400339.jpg?sh=400&q=75&yocs=o_s_",
        name:"Champagne Toast",
        type:"Ultimate Hydration Body Cream",
        price: 16.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1dde632/hires/026414216.jpg?sh=400&q=75&yocs=o_s_",
        name:"Bahamas Passionfruit & Banana Flower",
        type:"Ultimate Hydration Body Cream",
        price: 16.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c60b8f9/hires/026414204.jpg?sh=400&q=75&yocs=o_s_",
        name:"Bahamas Passionfruit & Banana Flower",
        type:"Super Smooth Body Lotion",
        price: 14.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbfaec5de/hires/026402525.jpg?sh=400&q=75&yocs=o_s_",
        name:"Pink Pineapple Sunrise",
        type:"Shower Gel",
        price: 13.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08a639cb/hires/026400315.jpg?sh=400&q=75&yocs=o_s_",
        name:"Champagne Toast",
        type:"Shower Gel",
        price: 14.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw721cdba8/hires/026408298.jpg?sh=400&q=75&yocs=o_s_",
        name:"Bahamas Passionfruit & Banana Flower",
        type:"Shower Gel",
        price: 14.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    },
    {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3a3a83f4/hires/026400323.jpg?sh=400&q=75&yocs=o_s_",
        name:"Champagne Toast",
        type:"Shower Gel",
        price: 14.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
    }
   
   
 ]

 recomended.map(function(ele){
     var box=document.createElement("div")
     box.setAttribute("class","box1")

     var image=document.createElement("img");
     image.src=ele.imgurl;

     var head=document.createElement("h2");
     head.textContent=ele.name;

     var para=document.createElement("p");
     para.innerText=ele.type;

     var price=document.createElement("h4");
     price.textContent="$" + ele.price;


     var offer1=document.createElement("p")
     offer1.setAttribute("id","shopping-offer")
     offer1=ele.offer;
    

     box.append(image,head,para,price,offer1);

     document.querySelector(".recomended").append(box)
 })


var items=[
      {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dweb86f747/hires/026270017.jpg?sh=471&yocs=o_s_",
        name:"Teakwood",
        type:"Ultimate Hydration Body Cream",
        price: 15.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4d57b151/hires/026237209.jpg?sh=471&yocs=o_s_",
        name:"Ocean",
        type:"3-in-1 Hair, Face & Body Wash",
        price: 13.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw21abdadb/hires/026393170.jpg?sh=471&yocs=o_s_",
        name:"Fresh Getaway",
        type:"Shower Gel",
        price:13.50 ,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd376fdc9/hires/026400333.jpg?sh=471&yocs=o_s_",
        name:"Confetti Daydream",
        type:"Fine Fragrance Mist",
        price: 17.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw605c767f/hires/026414209.jpg?sh=471&yocs=o_s_",
        name:"Waikiki Beach Coconut",
        type:"Fine Fragrance Mist",
        price: 17.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2f131856/hires/026414211.jpg?sh=471&yocs=o_s_",
        name:"Fiji Sunshine Guava-tini",
        type:"Fine Fragrance Mist",
        price: 17.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcfa13ff7/hires/026412623.jpg?sh=471&yocs=o_s_",
        name:"Honolulu Sun",
        type:"Fine Fragrance Mist",
        price: 16.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
       {
        imgurl:"https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.20f/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdf2a2ab4/hires/026271361.jpg?sh=471&yocs=o_s_",
        name:"Endless Weekend",
        type:"Fine Fragrance Mist",
        price: 15.50,
        offer:"Mix & Match: Buy 3, Get 1 Free"
       },
]

items.map(function(ele){
    var box=document.createElement("div")
    box.setAttribute("class","box1")

    var image=document.createElement("img");
    image.src=ele.imgurl;

    var head=document.createElement("h2");
    head.textContent=ele.name;

    var para=document.createElement("p");
    para.innerText=ele.type;

    var price=document.createElement("h4");
    price.textContent="$" + ele.price;


    var offer1=document.createElement("p")
    offer1.setAttribute("class","offer")
    offer1=ele.offer;
   

    box.append(image,head,para,price,offer1);

    document.querySelector("#dont-forget").append(box)
})


var totalPrice= bagitem.reduce(function(sum,ele){
    return sum+ele.price;
},0)
console.log(totalPrice)

document.querySelector("#subtotal").innerText="$" +"   "+totalPrice

totalPrice=totalPrice+5.61+4.35;
document.querySelector("#finalprice").innerText="$"+" "+totalPrice;





bagitem.map(function(ele,index){
    var tr1=document.createElement("tr");

    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");

    // to remove item

    var td6=document.createElement("td")
    var rem=document.createElement("p");
    rem.setAttribute("id","remove");
    rem.innerText="REMOVE";
    rem.addEventListener("click",function(){
        RemoveFun(ele,index);

    })
    td6.append(rem);

    var image=document.createElement("img")
    image.src=ele.url

    var p1=document.createElement("p");
    p1.innerText=ele.name

    var p2=document.createElement("p");
    p2.innerText=ele.type_name;

    var p3=document.createElement("p");
    p3.innerText="Mix & Match: Buy 3, Get 1 Free"
    

    var p4=document.createElement("p");
    p4.innerText="Add to My Love-It List";

    td1.append(image);

    td2.append(p1,p2,p3,p4)

    

    var price1=document.querySelector("p");
    price1.innerText="$"+ +ele.price

    td3.append(price1);

    var itemcount=document.createElement("p");
    itemcount.setAttribute("class","countbox");
    var inc=document.createElement("p");
    inc.innerText="+";
    inc.addEventListener("click",increment)

    var qty=document.createElement("p")
    qty.innerText=count;

    var dec=document.createElement("p");
    dec.innerText="-"
    dec.addEventListener("click",decrement)

    function increment(){
        count++;
        localStorage.setItem("Quantity",count)
        qty.innerText=count;

    }
    function decrement(){
        if(count<2){
            return 0;
        }
        count--;
        localStorage.setItem("Quantity",count)
        qty.innerText=count;

    }


    itemcount.append(dec,qty,inc);
    td4.append(itemcount);

    td5.innerText="total price"

    tr1.append(td1,td2,td3,td4,td5,td6)

    document.querySelector("tbody").append(tr1)
   
})

// no. of item in the bag
var length=0;
length=bagitem.length;
document.querySelector("#count").innerText=length;

function RemoveFun(index){
    bagitem.splice(index,1)
    localStorage.setItem("addTobag",JSON.stringify(bagitem))
    window.location.reload();
}

function Myfun(){
    window.location.href="http://127.0.0.1:5500/U2-project-bathand-body-works/login%20signin%20cartt/Shipping.html"
}



























//  $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })



