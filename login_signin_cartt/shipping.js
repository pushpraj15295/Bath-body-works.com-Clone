
document.querySelector("#btn2").addEventListener("click", paymentFun)

var cartData=JSON.parse(localStorage.getItem("addTobag"))
console.log(cartData)

cartData.map(function(elem){
   var box=document.createElement("div");
   box.setAttribute("id","cartfix")

    var box1=document.createElement("div");
    
     
    var box2=document.createElement("div")

    var image=document.createElement("img");
    image.src=elem.url;
    box1.append(image);

    var name1=document.createElement("p");
    name1.innerText=elem.name;

    var type=document.createElement("p");
    type.innerText=elem.type_name;

    var price1=document.createElement("p");
    price1.innerText=`\$ ${elem.price}`;

    var qty=document.createElement("p");
    var itemQty=localStorage.getItem("Quantity")
    qty.innerText="Qty :"+itemQty;

    box2.append(name1,type,qty)

    box.append(box1,box2,price1);

    document.querySelector(".cartbox").append(box)
})

var subtotal=cartData.reduce(function(sum,ele){
    return sum+ ele.price;
},0)

document.querySelector("#totalPrice").innerText="$"+" "+subtotal

document.querySelector("#tax").innerText="$"+" "+6.99

document.querySelector("#salestax").innerText="$"+" "+5.85

subtotal=subtotal+6.99+5.85;

document.querySelector("#usd").innerText="$"+" "+subtotal;

function paymentFun(){
    window.location.href="http://127.0.0.1:5500/U2-project-bathand-body-works/login%20signin%20cartt/Payment.html"
}
