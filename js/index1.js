function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement)
	} else {
		parent.insertBefore(newElement,targetElement.nextSubling)
	}
}
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;	
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../img/bizhi11.jpg");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Chooge an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = docement.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
		}
	}
}

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttrbute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if (!document.getElementById("placeholder")) return false;
	if (whichpic.getAttrbute("title")) {
		var text = whichpic.getAttrbute("title");
	} else {
		var text = ' ';
	}
	var description = docement.getElementById("description");
	if (description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text
	}
	return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
