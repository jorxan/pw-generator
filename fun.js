function generatepw(){
    //possible characters//
    let lowercase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    let capital = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
    let num = ['1','2','3','4','5','6','7','8','9','0',];
    let special = ['!','@','#','$','%','^','&','*','_','+','?',',','.','-','=','(',')','[',']','{','}'];

    //user input for password length and characters//
    
    
    var passlength = prompt('How long would you like the password to be? (must be between 8 and 128)');
    if ((passlength>=8) && (passlength <=128)) {
        alert("you chose " + passlength)
        var confirmcap = confirm('would you like your password to include capital letters?');
         var confirmlow = confirm('would you like your password to include lowercase letters?');
        var confirmnum = confirm('would you like your password to include numbers?');
        var confirmsym = confirm('would you like your password to include symbols?');

       
    }
    else {
    alert("please choose a length between 8 and 128")
    generatepw()
    }
    
}

function populateform(enterLength) {
    document.pgenerate.oputput.value = generatepass(enterLength)
}

generatepw();


