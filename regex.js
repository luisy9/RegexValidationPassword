

let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\[\]:;<>,.?~\\-]).{8,}$/;


const PasswordValidation = (password) =>  console.log(regex.test(password));
PasswordValidation('MiContraseña1234');
