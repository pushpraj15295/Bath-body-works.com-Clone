document.querySelector("form").addEventListener("submit", GetUserData);


document.querySelector("#accountcreate").addEventListener("click", createFun)




function createFun(){
    window.location.href="http://127.0.0.1:5500/U2-project-bathand-body-works/login%20signin%20cartt/signin.html"
}




var userInfo = JSON.parse(localStorage.getItem("UserCreds"))
console.log(userInfo)
function GetUserData(event) {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    var enteredPassword = document.querySelector("#enterPass").value;
    console.log(enteredEmail, enteredPassword)
    var text = "";
    for (var i = 0; i < userInfo.length; i++) {
        if (enteredEmail == userInfo[i].UserEmail && enteredPassword == enteredPassword == userInfo[i].UserPassword) {
            // console.log("Login Sucessful")
            alert("Login Successful! Enjoy the Shopping")
            document.querySelector("#email").textContent=""
            break;
            
        }
        if (enteredEmail != userInfo[i].UserEmail && enteredPassword != userInfo[i].UserPassword) {
            // console.log("Login Failed")
             alert("Wrong Credential!")
             document.querySelector("#email").textContent=""
            break;
        }
    }

}