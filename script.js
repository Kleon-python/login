function togglePasswordVisibility() {
   var passwordField = document.getElementById('password');
   var eyeIcon = document.querySelector('.eye');
   var eyeIconSlashed = document.querySelector('.eye-con');
     
   if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.src = 'https://static-00.iconduck.com/assets.00/eye-password-show-icon-512x385-ewv73148.png';
      
      eyeIconSlashed.style.top = '247.5px';
   } else {
      passwordField.type = 'password';
      eyeIcon.src = 'https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png';
      eyeIconSlashed.style.top = '245px';
   }
}
