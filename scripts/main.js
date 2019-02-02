var selectedImage = document.querySelector('img');

selectedImage.onclick = function() {

	var imagePath = selectedImage.getAttribute('src');
	if(imagePath === 'images/firefox-logo.png')
	{
		selectedImage.setAttribute('src','images/firefox-logo1.png')
	}
	else
	{
		selectedImage.setAttribute('src','images/firefox-logo.png')
	}
}

changeButton = document.querySelector('button');
heading = document.querySelector('h1');

function setUserName()
{
	var currentUser = prompt('Hi there! What should i call you?');
	localStorage.setItem('name',currentUser);
	heading.textContent = 'Welcome to Mozilla, ' + currentUser + '!';
}

// handle the very first time page loads
if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	var storedName = localStorage.getItem('name');
	heading.textContent = 'Welcome to Mozilla, ' + storedName + '!';
}


changeButton.onclick = function() {
	setUserName();
}



