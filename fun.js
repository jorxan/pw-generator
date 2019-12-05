const passwordEl = document.getElementById('password')
const generateEl = document.getElementById('generate')
const copyEl = document.getElementById('copy')


generateEl.addEventListener('click', () => {
    function questions() {
        let pw = ''
        const passlength = prompt('How long would you like the password to be? (must be between 8 and 128)');
        if (parseInt(passlength) >= 8 && parseInt(passlength) <= 128) {
            alert("you chose " + passlength)
            const confirmcap = confirm('would you like your password to include capital letters?');
            const confirmlow = confirm('would you like your password to include lowercase letters?');
            const confirmnum = confirm('would you like your password to include numbers?');
            const confirmsym = confirm('would you like your password to include symbols?');
            const numberlength = parseInt(passlength)


            const length = numberlength;
            const hasLower = (confirmlow);
            const hasUpper = (confirmcap);
            const hasNumber = (confirmnum);
            const hasSymbol = (confirmsym);
            let low = 'qwertyuiopasdfghjklzxcvbnm';
            let cap = 'QWERTYUIOPASDFGHJKLZXCVBNM';
            let num = '1234567890';
            let sym = '!@#$%^&*()_+-=[]{},./?';
            let char = '';
            let characters = char;
            if (confirmcap === true) {
                let results = (characters += cap)
            }

            if (confirmlow === true) {
                let results = (characters += low)
            }

            if (confirmnum === true) {
                let results = (characters += num)
            }

            if (confirmsym === true) {
                let results = (characters += sym)
            }
            
            else {
                alert('retry and use at least 1 character type')
            }
            

            for (let i = 0; i < length; i++) {
                pw += characters.charAt(Math.floor(Math.random() * characters.length))   
            }
           
            document.getElementById('password').innerHTML = pw
            return pw
        }
        else {
            alert("please choose a length between 8 and 128")
            questions();
        }
    }
    questions()
})

copyEl.addEventListener('click', () => {
    function myFunction() {
        /* Get the text field */
        let copyText = document.getElementById("password");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }
      myFunction()
})