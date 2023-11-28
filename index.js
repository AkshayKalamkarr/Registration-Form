const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const phone=document.getElementById('phone');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
})

function checkInput() {
    //// get the values from the inputs
    const usernameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const phoneval=phone.value.trim();

    if (usernameval==='') {
        setErrorFor(username,'username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if (emailval==='') {
        setErrorFor(email,'email cannot be blank');
    }else{
        setSuccessFor(email);
    }


    if (passwordval==='') {
        setErrorFor(password,'password cannot be blank');
    }if(passwordval.length !=8){
        setErrorFor(password,'Enter 8 charecter password')
    }
    else{
        setSuccessFor(password)
    }

    if (phoneval==='') {
        setErrorFor(phone,'phone cannot be blank');
    }if(phoneval.length !=10){
        setErrorFor(phone,'enter valid phone number')
    }
    
    else{
        setSuccessFor(phone)
    }


}


function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');

    //// add error message inside small
    small.innerText=message;

   ////  add error class
   formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

