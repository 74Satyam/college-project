const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 60000,
    colors: [
      {
        code: "black",
        img: "https://m.media-amazon.com/images/I/61QZrt-3tRL._SY625._SX._UX._SY._UY_.jpg",
      },
      {
        code: "darkblue",
        img: "https://m.media-amazon.com/images/I/412peezX3nL.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 90000,
    colors: [
      {
        code: "lightgray",
        img: "https://m.media-amazon.com/images/I/51y3YtNMV5L._SY625._SX._UX._SY._UY_.jpg",
      },
      {
        code: "white",
        img: "https://m.media-amazon.com/images/I/61yoLRtJ3cL._SY625._SX._UX._SY._UY_.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 70000,
    colors: [
      {
        code: "pink",
        img: "https://m.media-amazon.com/images/I/71jdu29TyTL._UX625_.jpg",
      },
      {
        code: "white",
        img: "https://m.media-amazon.com/images/I/61+Xr7osqVL._SY625._SX._UX._SY._UY_.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 40000,
    colors: [
      {
        code: "gray",
        img: "https://m.media-amazon.com/images/I/61eTJ7NB7TL._SY625._SX._UX._SY._UY_.jpg",
      },
      {
        code: "white",
        img: "https://m.media-amazon.com/images/I/61JQH7WQsYL._UX625_.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 50000,
    colors: [
      {
        code: "gray",
        img: "https://m.media-amazon.com/images/I/61RrW234u2L._UY625_.jpg",
      },
      {
        code: "blue",
        img: "https://m.media-amazon.com/images/I/51rzuwlZsAL._SY625._SX._UX._SY._UY_.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "CR7",
    price: 50000,
    colors: [
      {
        code: "gray",
        img: "https://m.media-amazon.com/images/I/41WH6sCr3GL.jpg",
      },
      {
        code: "red",
        img: "https://m.media-amazon.com/images/I/51cI0YR36ZL._SY695._SX._UX._SY._UY_.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RS" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});