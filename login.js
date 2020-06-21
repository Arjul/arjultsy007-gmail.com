
function validation(index){

    var uname = document.getElementById("name");

    var psw = document.getElementById("psw");

    if (uname.value!=="admin") 
    
    {
        alert("enter valid user name");

        return false;
    }
    if(psw.value!=="12345"){

    
    alert("enter valid password");
   
    return false;
}

gotodo();

function gotodo(){

   window.location.replace("todo.html");

}

}