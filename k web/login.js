function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");
  const accountView = document.getElementById("accountView");
  const authCard = document.getElementById("authCard");

  const user = getUser();
  if (user) {
    accountView.style.display = "block";
    authCard.style.display = "none";
    document.getElementById("accountName").textContent = user.name;
    document.getElementById("accountEmail").textContent = user.email;
  }

  showSignup?.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });
  showLogin?.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
  });

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = email.split("@")[0];
    signIn(name, email);
    window.location.href = "index.html";
  });

  signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    signIn(e.target.name.value, e.target.email.value);
    window.location.href = "index.html";
  });

  document.getElementById("signOutBtn")?.addEventListener("click", () => {
    signOut();
    window.location.reload();
  });
}

document.addEventListener("DOMContentLoaded", initLoginPage);
