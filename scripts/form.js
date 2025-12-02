const products = [
    { id: "sp001", name: "Laptop Pro Max" },
    { id: "sp002", name: "Wireless Headphones" },
    { id: "sp003", name: "Smart Blender" },
    { id: "sp004", name: "Kitchen Pro Mixer" },
    { id: "sp005", name: "LED Desk Lamp" },
];

const select = document.querySelector("#product");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});
