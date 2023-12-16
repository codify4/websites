function genPsw(pswLength, includeLower, includeUpper, includeNums, includeSyms){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const symChars = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLower ? lowerChars : "";
    allowedChars += includeUpper ? upperChars : "";
    allowedChars += includeNums ? numChars : "";
    allowedChars += includeSyms ? symChars : "";

    console.log(allowedChars);

    if(pswLength <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of chars should be selected.)`;
    }
    for(let i = 0; i <= pswLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    return password;
}

const pswLength = 6;
const includeLower = true;
const includeUpper = true;
const includeNums = true;
const includeSyms = true;

const psw = genPsw(pswLength, includeLower, includeUpper, includeNums, includeSyms);
console.log(`Generated Password ${psw}`);