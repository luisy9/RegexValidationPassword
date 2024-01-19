

let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[_.&])[._&A-Za-z\d]{8,}$/;

const PasswordValidation = (password) =>  console.log(regex.test(password));
PasswordValidation('MiContraseña1234');

//GMAIL 
//^(?!^\.)[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-z0-9]+\.([a-z]{2})$