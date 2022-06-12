/******************************************
Treehouse FSJS Techdegree:
project 3 - Interactive Form
******************************************/

// @author   Barbara Vega


// When page loads the first form field will be focused
const nameFocus = document.getElementById('name');
nameFocus.focus(); 

//Other Job field is hidden unless Other is selected in the Job Field.
let jobRole = document.getElementById('title');
let otherJobRole = document.getElementById('other-job-role');
otherJobRole.hidden = true;

jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
       otherJobRole.style.display ='inherit';
    } else if (e.target.value !== 'other'){
        otherJobRole.style.display= 'none';    }
 });


//hides sub design options when design type is selected
const designTheme = document.getElementById('design');
const designThemeOptions = document.getElementById('color');
const cornFlowerBlue = document.getElementById('color').options[1];
const darkSlateGrey = document.getElementById('color').options[2];
const gold = document.getElementById('color').options[3];
const tomato = document.getElementById('color').options[4];
const steelBlue = document.getElementById('color').options[5];
const dimGrey = document.getElementById('color').options[6];
const shirtOptions = document.getElementById("color");

designThemeOptions.setAttribute('disabled', ' ');


designTheme.addEventListener('change', (e) => {
 
    
    if (e.target.value === 'js puns'){
        designThemeOptions.removeAttribute('disabled');
        shirtOptions[4].removeAttribute("selected");
        shirtOptions[1].setAttribute("selected", true);
        cornFlowerBlue.style.display = 'inherit';
        darkSlateGrey.style.display = 'inherit';
        gold.style.display = 'inherit';

        tomato.style.display = 'none';
        steelBlue.style.display = 'none';
        dimGrey.style.display = 'none';
    } else if (e.target.value === 'heart js'){
        designThemeOptions.removeAttribute('disabled');
        shirtOptions[1].removeAttribute("selected");
        shirtOptions[4].setAttribute("selected", true);
        
        tomato.style.display = 'inherit';
        steelBlue.style.display = 'inherit';
        dimGrey.style.display = 'inherit';

        cornFlowerBlue.style.display = 'none';
        darkSlateGrey.style.display = 'none';
        gold.style.display = 'none';}
 });


 // Totals Registered Activities Cost
const registeredActivities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let totalCost = 0;

registeredActivities.addEventListener('change', (e) => {
    let dataCost = +e.target.getAttribute('data-cost');
    if (e.target.checked){
        totalCost += dataCost;
    } else {
        totalCost -= dataCost
    }
    activitiesCost.innerHTML = `$ ${totalCost}`;
})

//Payment Information Section

const methodsOfPayment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

//displays credit card section as default and hides paypal and bitcoin section until selected

methodsOfPayment.children[1].setAttribute('selected', 'selected');
paypal.style.display = 'none';
bitcoin.style.display = 'none';

methodsOfPayment.addEventListener('change', (e) => {
  if (e.target.value === 'paypal'){
      paypal.style.display = 'inherit';
      creditCard.style.display = 'none';
      bitcoin.style.display = 'none';

  } else if (e.target.value === 'bitcoin'){
      bitcoin.style.display = 'inherit';
      paypal.style.display = 'none';
      creditCard.style.display = 'none';

  } else if (e.target.value === 'credit-card'){
    creditCard.style.display = 'inherit';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
  }

})

 // Form Validation with Regex codes.  Displays warning and hints if the required inputs are not filled out currectly.

 const paymentName = document.getElementById('name');
 const paymentEmail = document.getElementById('email');
 const paymentActivities = document.getElementById('activities');
 const paymentCCNumber = document.getElementById('cc-num');
 const paymentZipCode = document.getElementById('zip');;
 const paymentCVV = document.getElementById('cvv');;
 const paymentForm = document.querySelector('form');
 

 paymentForm.addEventListener('submit', (e)=>{
 
   //Name Validation
   let nameRegEx =/^[a-zA-Z0-9_ ]+$/.test(paymentName.value);
   if (nameRegEx === true){
        paymentName.parentNode.className = 'valid';
        paymentName.parentNode.className.remove = 'not-valid';
        paymentName.parentNode.lastElementChild.style.display = 'none';
    } else {
        paymentName.parentNode.className = 'not-valid';
        paymentName.parentNode.className.remove = 'valid';
        paymentName.parentNode.lastElementChild.style.display = 'initial';
        e.preventDefault();  
    }

   //Email Validation
   // Regex Expression source from https://emailregex.com/
   let emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(paymentEmail.value);
   if (emailRegEx === true){
       paymentEmail.parentNode.className = 'valid';
       paymentEmail.parentNode.className.remove = 'not-valid';
       paymentEmail.parentNode.lastElementChild.style.display = 'none';
   } else {
       paymentEmail.parentNode.className = 'not-valid';
       paymentEmail.parentNode.className.remove = 'valid';
       paymentEmail.parentNode.lastElementChild.style.display = 'initial';

       e.preventDefault();  
   }


   // Activities Validation
   if (totalCost > 0){
     paymentActivities.className = 'valid activities';
     paymentActivities.lastElementChild.style.display = 'none';
     paymentActivities.className.remove = 'not-valid';

   } else{
     paymentActivities.className = 'not-valid activities';
     paymentActivities.className.remove = 'valid';
     paymentActivities.lastElementChild.style.display = 'initial';
     e.preventDefault();  
   }


  // Zip Code Validation
  let ZipCodeRegEx = /^\d{5}$/.test(paymentZipCode.value);
  if (ZipCodeRegEx === true){
    paymentZipCode.parentNode.className = 'valid';
    paymentZipCode.parentNode.lastElementChild.style.display = 'none';
    paymentZipCode.parentNode.className.remove = 'not-valid';

  } else {
      paymentZipCode.parentNode.className = 'not-valid';
      paymentZipCode.parentNode.className.remove = 'valid';
      paymentZipCode.parentNode.lastElementChild.style.display = 'initial';
      e.preventDefault();  

  }

  // CVV Code Validation
  let paymentRegEx = /^\d{3}$/.test(paymentCVV.value);
  if (paymentRegEx === true){
    paymentCVV.parentNode.className = 'valid';
    paymentCVV.parentNode.className.remove = 'not-valid';
    paymentCVV.parentNode.lastElementChild.style.display = 'none';
  } else {
    paymentCVV.parentNode.className = 'not-valid';
    paymentCVV.parentNode.className.remove = 'valid';
    paymentCVV.parentNode.lastElementChild.style.display = 'initial';
    e.preventDefault();  
  }

  // CC Validation
  let CCRegEx = /^\d{13,16}$/.test(paymentCCNumber.value);
  if (CCRegEx === true){
    paymentCCNumber.parentNode.className = 'valid';
    paymentCCNumber.parentNode.className.remove = 'not-valid';  
    paymentCCNumber.parentNode.lastElementChild.style.display = 'none';
   } else {
    paymentCCNumber.parentNode.className = 'not-valid';  
    paymentCCNumber.parentNode.className.remove = 'valid';  
    paymentCCNumber.parentNode.lastElementChild.style.display = 'initial';
    e.preventDefault();  
  }
});

// adds focus and blur to the activities section


const checkboxAccessibility = document.querySelectorAll('div#activities-box input[type="checkbox"]');

for (i=0; i < checkboxAccessibility.length; i++){
    checkboxAccessibility[i].addEventListener('focus', (e) =>{
        e.target.parentElement.classList.add('focus');
    })
    checkboxAccessibility[i].addEventListener('blur', (e) =>{
        e.target.parentElement.classList.remove('focus');
    })
}