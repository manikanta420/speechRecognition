# JS Speech Recognition.
Follow this processing points.

First, we need to inject our code to the cricbuzz while when it is loading. So, we need to add js inject extension to our chrome.
After creating one microphone button or image act as button into cricbuzz using javascript extension.

#micro phone image in the cricbuzz.

var node = document.createElement("INPUT");
node.setAttribute("type", "image");
node.className = "imagemic";
node.setAttribute('src', "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/85-512.png")
document.getElementById("cb-main-menu").appendChild(node);

#Speech Recognition.
After add speech recognition code .



