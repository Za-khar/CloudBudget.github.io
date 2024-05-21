document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  const signupBtn = document.querySelector(".signup-btn");
  const loginModal = document.querySelector(".login-modal");
  const signupModal = document.querySelector(".signup-modal");
  const closeBtns = document.querySelectorAll(".close-btn");

  loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });

  signupBtn.addEventListener("click", () => {
    signupModal.style.display = "flex";
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    } else if (event.target === signupModal) {
      signupModal.style.display = "none";
    }
  });
});
