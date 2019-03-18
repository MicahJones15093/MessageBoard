function initiate() {
    var postButton = document.getElementById("post");
    postButton.addEventListener("click", newItem);
    
    var clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", clearStorage);

    if (sessionStorage.getItem("name")){
	document.getElementById("name").value = sessionStorage.getItem("name");
    }

    readMessages();
}

function newItem() {
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;
    
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("text", text);
}

function clearStorage() {
    if (confirm("Are you sure?")){
	document.getElementById("name").value = "";
        sessionStorage.clear();
    }
}

function readMessages() {
    var textFile = new XMLHttpRequest();
    textFile.open("GET", "msgs.txt", false);
    textFile.onreadystatechange = function() {
	if(textFile.readyState === 4) {
	    if(textFile.status === 200 || textFile.status == 0){
		var messages = textFile.responseText;
		document.getElementById("dataBox").innerHTML = messages;
		console.log("getting file");
	    }
	}
    }
    textFile.send(null);
}

window.addEventListener("load", initiate);
