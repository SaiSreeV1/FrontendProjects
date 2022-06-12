// validation code 
//  return true----> form is validate
//  return false----> form is invalid

function validate(){
let f=false;
// validation... f=false initially ==form not submit forward , f=true ==form submitted forward.
// name field vaidation
let name=$(".name-field").val();
console.log(name);
if(name==''||name==undefined){
    $('.name-field-msg').html("Name is required ").addClass('text-danger');
    f=false;
}
else{
    $('.name-field-msg').html('Ok').removeClass('text-danger').addClass('text-success');
    f=true;
}
// email validation
let email=$(".email-field").val();
let eexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(name);
if(email==''||email==undefined){
    $('.email-field-msg').html("Email is required ").addClass('text-danger');
    f=false;
}
else if(eexp.test(email)==false){
    $('.email-field-msg').html("Invalid Email ,Email must be  in correct format (example@gmail.com) ").addClass('text-danger');
    f=false;
}

else{
    $('.email-field-msg').html('Ok').removeClass('text-danger').addClass('text-success');
    f=true;
}

// password validation
let password=$('.password-field').val();
let passwordexp=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
console.log(password);
if(password==''||password==undefined){
    $('.password-field-msg').html("Password is required ").addClass('text-danger');
    f=false;
}
// password contains string matches with passwordexp i.e regular expression or not
else if(passwordexp.test(password)==false){
    $('.password-field-msg').html("Invalid password ,Password must contain 1 Digit and Special character and length must be in 6 to 16 ").addClass('text-danger');
    f=false;
}

else{
    $('.password-field-msg').html('Ok').removeClass('text-danger').addClass('text-success');
    f=true;
}
// phone number validation
let phone=$('.phone-field').val();
let phonexp=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
let phonexp1=/^(\+91|0)?( )?(\d{10})$/;  //valid Indian regex
// Valid formats:

// (123) 456-7890
// (123)456-7890
// 123-456-7890
// 123.456.7890
// 1234567890
// +31636363634
// 075-63546725
let phonexp2=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// (?=.*[0-9]) - Assert a string has at least one number;
// (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
console.log(phone);
if(phone==''||phone==undefined){
    $('.phone-field-msg').html("Phone Number is required ").addClass('text-danger');
    f=false;
}
// phone contains string matches with passwordexp i.e regular expression or not
else if(phone.length!=10){
    $('.phone-field-msg').html("Invalid Phone number, length equal to 10 digits").addClass('text-danger');
    f=false;
}
else if(phonexp.test(phone)==false){
    $('.phone-field-msg').html("Invalid Phone number, must be in digits").addClass('text-danger');
    f=false;
}

else{
    $('.phone-field-msg').html('Ok').removeClass('text-danger').addClass('text-success');
    f=true;
}
f=false;
return f;
}