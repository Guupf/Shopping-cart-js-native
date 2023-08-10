const desktopButton = document.getElementById("desktopButton");
const mobileButton = document.getElementById("mobileButton");

desktopButton.addEventListener("click", redirectToDesktopCart);
mobileButton.addEventListener("click", redirectToMobileCart);

function redirectToDesktopCart() {
  window.location.href = "./pages/desktop/index.html";
}

function redirectToMobileCart() {
  window.location.href = "./pages/mobile/index.html";
}

desktopButton.addEventListener("animationend", () => {
  desktopButton.style.animationName = "none";
  mobileButton.style.animationName = "animationColorMobileButton";
});

mobileButton.addEventListener("animationend", () => {
  mobileButton.style.animationName = "none";
  desktopButton.style.animationName = "animationColorDesktopButton";
});
