// 1 Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
// 2 Podczas przesyłania formularza strona nie powinna się restartować.
// 3 Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny
// zostać wypełnione.
// 4 Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola
// będzie nazwą właściwości, a wartość pola - wartością właściwości.Aby otrzymać dostęp do elementów formularza
// użyj właściwości elements.
// 5 Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.

{
	/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
// </form> */
}

const inputEmail = document.querySelector('input[type = "email"]');
const inputPassword = document.querySelector('input[type="password"]');
const btn = document.querySelector('button[type="submit"]');
