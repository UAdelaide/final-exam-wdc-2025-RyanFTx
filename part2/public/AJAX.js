function sendLogin(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            window.location.href = '/index.html';
        }
        xhttp.open
}