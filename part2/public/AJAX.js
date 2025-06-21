function sendLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value; //gets the input for username and pass for the site
    var xhttp = new XMLHttpRequest(); //creates new XMLHttp request
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) { //if the ready state if 4 and status 200 (meaning there were no errors)
            document.getElementById("login-overlay").style.display = "none"; //set login overlay to none
        }
    };
    xhttp.open('POST','/api/users/login',true); //sends a post request to express routes /api/users/login
    xhttp.setRequestHeader('Content-Type', 'application/json'); //sets the request to be formatted in json
    xhttp.send(JSON.stringify({ username: username, password: password })); //sends the request
}

function sendLogout(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = '/';
        }
    };
    xhttp.open('POST','/api/users/logout',true);
    xhttp.send();
}



