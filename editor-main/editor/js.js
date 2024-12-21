document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('myAlertButton');

   alertButton.addEventListener('click', function() {
         const userChoice = confirm('Вы хотите перейти на другой сайт?');

         if (userChoice) {
            alert('Вы согласились на переход.');
            window.location.href = 'https://www.youtube.com/watch?v=PIv3W5ExGec&list=WL&index=16&t=1902s';
         } else {
             alert('Вы отказались от перехода.');
         }
    });
});