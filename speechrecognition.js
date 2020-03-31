var node = document.createElement("INPUT");
node.setAttribute("type", "image");
node.className = "imagemic";
node.setAttribute('src', "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/85-512.png")
document.getElementById("cb-main-menu").appendChild(node);
console.log(document.getElementsByClassName('imagemic')[0]);
document.getElementsByClassName('imagemic')[0].style.width='30px';
document.getElementsByClassName(' imagemic')[0].style.height='30px';
document.getElementsByClassName(' imagemic')[0].style.top='-40px';
document.getElementsByClassName(' imagemic')[0].style.position='relative';
document.getElementsByClassName(' imagemic')[0].style.left='766px';
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            console.log(command.toLowerCase());
            if(command.toLowerCase() === 'live scores'){
                console.log(document.getElementsByClassName('cb-hm-mnu-itm'))
                document.getElementsByClassName('cb-hm-mnu-itm')[0].click();
            }
            else if (command.toLowerCase() === 'schedule'){
 console.log(document.getElementsByClassName('cb-hm-mnu-itm'))
               document.getElementsByClassName('cb-hm-mnu-itm')[1].click();
            }
            else if (command.toLowerCase() === 'archives'){
                 document.getElementsByClassName('cb-hm-mnu-itm')[2].click();
            }
            else if (command.toLowerCase() === 'news'){
 console.log(command.toLowerCase());
 document.getElementsByClassName('text-white')[0].click();
document.getElementById('newsDropDown').click();
            }   
else if (command.toLowerCase() === 'cricbuzz'){
 console.log(command.toLowerCase());
 document.getElementsByClassName('cb-hm-text')[0].click();
document.getElementById('newsDropDown').click();
            }   
        };
        recognition.onspeechend = function() {
            recognition.stop();
        };

        recognition.onerror = function(event) {
            console.log('Error occurred in recognition: ' + event.error);
        }  
       document.querySelector('.imagemic').addEventListener('mouseover', function(event){
            recognition.start();
        });
document.querySelector('.imagemic').addEventListener('mouseout', function(event){
            recognition.stop();
        });
