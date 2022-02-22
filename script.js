let display = document.getElementById('textdisplay');
let buttons =Array.from(document.getElementsByClassName('button'));
let changeBracket=1;
// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//     console.log(buttons);
//     });
// });
buttons.map( button => {
   button.addEventListener('click', (e) => {
         switch(e.target.innerText){
             case 'AC':
                 display.innerText = '';
                 changeBracket =1;
                 break;
             case '%':
                 display.innerText =(display.innerText)/100;  
                 break;  
             case '=':
                 try{
                     display.innerText = eval(display.innerText);
                 } catch {
                     display.innerText = "Error"
                 }
                 break;
             case '←':
                 if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    changeBracket = 1;
                 }
                 break;
             case '()':  
                 if(changeBracket===1){
                    display.innerText += "(";
                    changeBracket = 2;
                     }
                 else {
                      let lastchar= display.innerText.substring(display.innerText.length-1);
                     if(lastchar === "("){
                         display.innerText+= "(";
                     }
                     else{
                    display.innerText += ")" ;
                    changeBracket = 1;
                     }
                     }
                 break;
             default:
                 display.innerText += e.target.innerText;
         }
     });
 });
