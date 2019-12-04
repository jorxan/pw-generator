let low = 'qwertyuiopasdfghjklzxcvbnm';

let cap = 'QWERTYUIOPASDFGHJKLZXCVBNM';

let num = '1234567890';

let sym = '!@#$%^&*()_+-=[]{},./?';

var generatepw = document.getElementById("generate")






var passlength = prompt('How long would you like the password to be? (must be between 8 and 128)');
if ((passlength>=8) && (passlength <=128)) {
    alert("you chose " + passlength);
    var confirmcap = confirm('would you like your password to include capital letters?');
     var confirmlow = confirm('would you like your password to include lowercase letters?');
    var confirmnum = confirm('would you like your password to include numbers?');
    var confirmsym = confirm('would you like your password to include symbols?');

   var pwd = '';

       if (confirmcap = true) {
           pwd += characters.charAt(Math.floor(Math.random()*cap.length))
       };
       if (confirmlow = true) {
           pwd += characters.charAt(Math.floor(Math.random()*low.length))
       };
       if (confirmnum = true) {
           pwd += characters.charAt(Math.floor(Math.random()*num.length))
       }
       if (confirmsym = true) {
           pwd += characters.charAt(Math.floor(Math.random()*sym.length))
       }
       if ((confirmcap = false) && (confirmlow = false) && (confirmnum = false) || (confirmcap =false) && (confirmlow = flase) && (confirmsym = false) || (confirmcap = false) && (confirmnum = false) && (confirmsym = false) || (confirmlow = false) && (confirmnum = false) && (confirmsym = false) || (confirmcap = false) && (confirmlow = false) && (confirmnum = false) && (confirmsym = false)) {
           alert('please choose at least 2 types of characters')
}


else if ((passlength<=7) || (passlength>=129)) {
alert("please choose a length between 8 and 128")
passlength
}
    var pwd = '';
    for (let i = 0; i<pwd.length; i++) {
        pwd += characters.charAt(Math.floor(Math.random()*characters.length));

        if (confirmcap = true) {
            pwd += characters.charAt(Math.floor(Math.random()*cap.length))
        };
        if (confirmlow = true) {
            pwd += characters.charAt(Math.floor(Math.random()*low.length))
        };
        if (confirmnum = true) {
            pwd += characters.charAt(Math.floor(Math.random()*num.length))
        }
        if (confirmsym = true) {
            pwd += characters.charAt(Math.floor(Math.random()*sym.length))
        }
        if ((confirmcap = false) && (confirmlow = false) && (confirmnum = false) || (confirmcap =false) && (confirmlow = flase) && (confirmsym = false) || (confirmcap = false) && (confirmnum = false) && (confirmsym = false) || (confirmlow = false) && (confirmnum = false) && (confirmsym = false) || (confirmcap = false) && (confirmlow = false) && (confirmnum = false) && (confirmsym = false)) {
            alert('please choose at least 2 types of characters')
            
console.log(confirmcap)


}
    }


}
