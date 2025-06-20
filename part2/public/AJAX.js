function sendLogin(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = '/index.html';
        }
    };
    
}




