const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", redirectToHome);

function redirectToHome() {
  window.location.href = "../../../src/index.html";
}

/*const itemQuantityResult = document.querySelector(".itemQuantityResult");
const minusOneItem = document.getElementById("minusOneItem");
const currentPrice = document.querySelector(".currentPrice");
const plusOneItem = document.getElementById("plusOneItem");

plusOneItem.addEventListener("click", () => updateQuantity(1));
minusOneItem.addEventListener("click", () => updateQuantity(-1));

function updateQuantity(change) {
  const currentQuantity = parseInt(itemQuantityResult.textContent);
  const newQuantity = currentQuantity + change;

  if (newQuantity > 0) {
    itemQuantityResult.textContent = newQuantity;
  }
}*/

const updateQuantity = (button, change) => {
  const itemContainer = button.closest(".containerItemBeingSold");
  const resultSpan = itemContainer.querySelector(".itemQuantityResult");
  const currentQuantity = parseInt(resultSpan.textContent);

  let newQuantity = currentQuantity + change;
  newQuantity = Math.max(newQuantity, 1);
  resultSpan.textContent = newQuantity;

  const pricePerItem = 100;
  const currentPriceSpan = itemContainer.querySelector(".currentPrice");
  const totalPriceResult = document.getElementById("totalPriceResult");
  const initialPrice = document.querySelector(".initialPrice");
  const updatedCurrentPrice = pricePerItem * newQuantity;
  currentPriceSpan.textContent = `$${updatedCurrentPrice.toFixed(2)}`;
  const allContainers = document.querySelectorAll(".containerItemBeingSold");
  const shippingFees = 12.0;

  let totalPrice = 0;
  allContainers.forEach((container) => {
    const quantity = parseInt(
      container.querySelector(".itemQuantityResult").textContent
    );
    totalPrice += pricePerItem * quantity;
  });

  totalPriceResult.textContent = `$${(totalPrice + shippingFees).toFixed(2)}`;
  initialPrice.textContent = `$${totalPrice.toFixed(2)}`;
};

document.querySelectorAll(".itemQuantityChooseButtonAdd").forEach((button) => {
  button.addEventListener("click", () => {
    updateQuantity(button, 1);
  });
});

document
  .querySelectorAll(".itemQuantityChooseButtonMinus")
  .forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(button, -1);
    });
  });

document.querySelectorAll(".trashCan").forEach((button) => {
  button.addEventListener("click", () => {
    const itemContainer = button.closest(".containerItemBeingSold");
    itemContainer.remove();

    const pricePerItem = 100;
    const totalPriceResult = document.getElementById("totalPriceResult");
    const allContainers = document.querySelectorAll(".containerItemBeingSold");

    let totalPrice = 0;
    allContainers.forEach((container) => {
      const quantity = parseInt(
        container.querySelector(".itemQuantityResult").textContent
      );
      totalPrice += pricePerItem * quantity;
    });

    const shippingFees = 12.0;

    const initialPrice = document.querySelector(".initialPrice");
    initialPrice.textContent = `$${totalPrice.toFixed(2)}`;

    if (totalPrice > 0) {
      totalPrice += shippingFees;
    }

    totalPriceResult.textContent = `$${totalPrice.toFixed(2)}`;
  });
});

const confirmPucharseButton = document.getElementById("proceedButton");
confirmPucharseButton.addEventListener("click", redirectToHome);
