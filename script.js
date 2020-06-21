function list(){
    submitSignin(index)
}
 {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var response = JSON.parse(this.responseText);
            var getoutput = "";
            for (var i = 0; i < response.length; i++)
             {
                getoutput += "<tr>";
                getoutput += "<th scope=\"row\">" + response[i].userId +"</th>";
                getoutput += "<td>" + response[i].id +"</td>";
                getoutput += "<td>" + response[i].title +"</td>";
                getoutput += "<td>" + response[i].completed +"</td>";
               
                getoutput += "</tr>";
            }
            document.querySelector("tbody").innerHTML = getoutput;
        }
    };

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}