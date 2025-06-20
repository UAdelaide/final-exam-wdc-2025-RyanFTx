function sendLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("login-overlay").style.display = "none";
        }
    };
    xhttp.open('POST','/api/users/login',true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({ username: username, password: password }));
}

function sendLogout(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ()



