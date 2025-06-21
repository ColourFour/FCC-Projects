let email = "bigdaddy@exactly.com";
let i = 0;
let length = 0;

function maskEmail(email){
    i = email.indexOf("@");
    length = email.length;
    let domain = email.slice(i, length)
    let firstLetter = email[0];
    let lastLetter = email[i-2];
    let fill = "*";
    console.log(domain);
    console.log(firstLetter);
    console.log(lastLetter);
    console.log(i);    
    let mask = firstLetter + fill.repeat(i) + lastLetter + domain;
    console.log(mask);
}

maskEmail("sucker@bam.com");
