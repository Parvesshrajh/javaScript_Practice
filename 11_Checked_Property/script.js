const checkbox = document.getElementById("myCheck");
const visa = document.getElementById("visa");
const gpay = document.getElementById("gpay");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("mySubmit");
const subinfo = document.getElementById("subinfo");
const maininfo = document.getElementById("maininfo");

submit.onclick = function(){
    if(checkbox.checked){
        subinfo.textContent = `You Are Subscribed`;
    }
    else{
        subinfo.textContent = `You Are Not Subscribed`;
    }
    if(visa.checked){
        maininfo.textContent = `You Are Paying With Visa`;
    }
    else if(gpay.checked){
        maininfo.textContent = `You Are Paying With Gpay`;
    }
    else if(paypal.checked){
        maininfo.textContent = `You Are Paying With PayPal`;
    }
    else{
        maininfo.textContent = `You Must Select A Payment Method`;
    }
}