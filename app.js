let container = document.querySelector(".container");
let minInput = document.querySelector("#min");
let maxInput = document.querySelector("#max");

let products = [];

function fillArray() {
  products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      title: "iPhone 15 Pro",
      price: 1199,
      description:
        "Apple flagship smartphone with A17 Pro chip and titanium design.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Nike Air Max",
      price: 149,
      description:
        "Comfortable running shoes with modern cushioning technology.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Wireless Headphones",
      price: 99,
      description:
        "Bluetooth headphones with noise cancellation and long battery life.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Smart Watch",
      price: 249,
      description: "Fitness tracking smartwatch with heart rate monitoring.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      title: "MacBook Pro",
      price: 1999,
      description: "Powerful laptop for development, design, and productivity.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      title: "Gaming Keyboard",
      price: 79,
      description: "Mechanical RGB keyboard designed for gaming enthusiasts.",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      title: "4K Monitor",
      price: 349,
      description: "Ultra HD display with vibrant colors and sharp details.",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
      title: "Sunglasses",
      price: 59,
      description: "Stylish UV-protected sunglasses for everyday use.",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      title: "Backpack",
      price: 69,
      description: "Durable backpack suitable for travel and daily commuting.",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Digital Camera",
      price: 799,
      description: "High-quality camera for photography and video recording.",
    },
  ];
}



function cardDaxatva() {
    container.innerHTML = ""
  for (let item of products) {
    container.innerHTML += `<div class="card">
        <img src="${item.image}" alt="" />
        <h2>${item.title}</h2>
        <h6>Price:  ${item.price} ₾ </h6>
        <p>${item.description}</p>
        <button>Buy Now</button>
      </div>`;
  }
}

fillArray()
cardDaxatva()




function filter() {
  
  fillArray();

  products = products.filter((item) => item.price >= minInput.value && item.price <= maxInput.value,);

  cardDaxatva()
}