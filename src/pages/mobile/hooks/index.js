const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", redirectToHome);

function redirectToHome() {
  window.location.href = "../../../src/index.html";
}

const products = document.getElementById("products");
const address = document.getElementById("address");
const payment = document.getElementById("payment");
const productsMain = document.querySelector(".productsMain");
const addressMain = document.querySelector(".addressMain");
const paymentMain = document.querySelector(".paymentMain");

function setInitialState() {
  products.classList.add("selected");

  productsMain.style.display = "block";
  addressMain.style.display = "none";
  paymentMain.style.display = "none";
}

setInitialState();

products.addEventListener("click", () => switchDisplay("products", products));
address.addEventListener("click", () => switchDisplay("address", address));
payment.addEventListener("click", () => switchDisplay("payment", payment));

function switchDisplay(selectedOption, selectedButton) {
  products.classList.remove("selected");
  address.classList.remove("selected");
  payment.classList.remove("selected");

  selectedButton.classList.add("selected");

  switch (selectedOption) {
    case "products":
      productsMain.style.display = "flex";
      addressMain.style.display = "none";
      paymentMain.style.display = "none";
      break;
    case "address":
      productsMain.style.display = "none";
      addressMain.style.display = "flex";
      paymentMain.style.display = "none";
      break;
    case "payment":
      productsMain.style.display = "none";
      addressMain.style.display = "none";
      paymentMain.style.display = "flex";
      break;
    default:
      console.log("error");
      break;
  }
}

const continueButtonProducts = document.querySelector(
  ".continueButtonProducts"
);
continueButtonProducts.addEventListener("click", () => nextSectionProducts());

const continueButtonAddress = document.querySelector(".continueButtonAddress");
continueButtonAddress.addEventListener("click", () => nextSectionAddress());

function nextSectionProducts() {
  productsMain.style.display = "none";
  addressMain.style.display = "flex";
  paymentMain.style.display = "none";

  products.classList.remove("selected");
  address.classList.add("selected");
}

function nextSectionAddress() {
  productsMain.style.display = "none";
  addressMain.style.display = "none";
  paymentMain.style.display = "flex";

  address.classList.remove("selected");
  payment.classList.add("selected");
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".addressSmallButton");
  const dropdown = document.getElementById("regionsDropdown");
  const dropdownItems = dropdown.getElementsByClassName("dropdownItem1");

  button.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!button.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  });

  for (const item of dropdownItems) {
    item.addEventListener("click", function () {
      const addressSmallButtonSpan = document.querySelector(
        ".addressSmallButtonSpan"
      );
      addressSmallButtonSpan.textContent = item.textContent;
      dropdown.classList.remove("show");
    });
  }
});
//\\//\\//\\//\\

const addButtonList = document.querySelectorAll(".itemQuantityChooseButtonAdd");
const minusButtonList = document.querySelectorAll(
  ".itemQuantityChooseButtonMinus"
);
const quantityResultList = document.querySelectorAll(".itemQuantityResult");
const itemGenericContainerList = document.querySelectorAll(
  ".itemGenericContainer"
);
const itemPriceList = document.querySelectorAll(".itemPrice");

function updateTotalPrice() {
  let totalPrice = 0;

  itemGenericContainerList.forEach((itemContainer, index) => {
    const quantity = parseInt(quantityResultList[index].textContent);
    const price = parseInt(itemPriceList[index].textContent.replace("$", ""));
    totalPrice += quantity * price;
  });

  const totalPriceWithTax = (totalPrice * 1.1).toFixed(2);

  document.querySelector(
    ".finalPriceSpan"
  ).textContent = `$${totalPrice.toFixed(2)}`;
  document.getElementById("finalPrice").textContent = `$${totalPriceWithTax}`;
  document.querySelector(
    ".subtotalPriceSpan"
  ).textContent = `$${totalPrice.toFixed(2)}`;
}

addButtonList.forEach((addButton, index) => {
  addButton.addEventListener("click", function () {
    let quantity = parseInt(quantityResultList[index].textContent);
    quantity++;
    quantityResultList[index].textContent = quantity;
    updateTotalPrice();
  });
});

minusButtonList.forEach((minusButton, index) => {
  minusButton.addEventListener("click", function () {
    let quantity = parseInt(quantityResultList[index].textContent);

    if (quantity > 1) {
      quantity--;
      quantityResultList[index].textContent = quantity;
      updateTotalPrice();
    }
  });
});

const confirmPucharseButton = document.querySelector(".confirmPucharseButton");
confirmPucharseButton.addEventListener("click", redirectToHome);
