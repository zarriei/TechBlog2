async function signupFormHandler(event) {
  event.preventDefault();

  // getting data from the form
  const username = document.querySelector("#username-signUp").value;
  console.log(username);
  const password = document.querySelector("#password-signUp").value;
  console.log(password);
  if (username && password) {
    console.log("hello");
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("success");

      // loginHandler();
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
