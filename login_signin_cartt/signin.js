// Top Paragraph

// geting the value from the user 
document.querySelector("form").addEventListener("submit", UserDetails)

var usersignIn=JSON.parse(localStorage.getItem("UserCreds")) || []

function UserDetails() {
    event.preventDefault();
    // console.log("inside Function")

    var name1 = document.querySelector("#name").value;
    var lastname = document.querySelector("#last_name").value;
    var email = document.querySelector("#email").value;
    var mob = document.querySelector("#mob").value;
    var pass = document.querySelector("#pass").value;
    var cemail = document.querySelector("#cemail").value;
    var pincode = document.querySelector("#pincode").value;

     console.log(name1,lastname,email,mob,pass,cemail,pincode)

     var obj1={
         user_name:name1,
         user_lastName:lastname,
         user_email:email,
         user_phone_no:mob,
         user_password:pass,
         user_pincode:pincode,
     }

     usersignIn.push(obj1);

     localStorage.setItem("UserCreds",JSON.stringify(usersignIn))
     alert("Successfully Saved your Detaills!")
     console.log(obj)
}