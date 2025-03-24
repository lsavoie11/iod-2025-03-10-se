document.getElementById("switch-button").addEventListener("click", function () {
  const imagesContainer = document.getElementById("images-container");

  // Clear any existing images
  imagesContainer.innerHTML = "";

  // Create and append new images
  const image1 = document.createElement("img");
  image1.src =
    "https://th.bing.com/th/id/OIP.uQFIZVvr5yGPrfwSLEd_rAHaIO?rs=1&pid=ImgDetMain";
  image1.alt = "Exploding Mind";

  const image2 = document.createElement("img");
  image2.src =
    "https://th.bing.com/th/id/R.b0f0fbf1ba15aec0b99f1c73462ac787?rik=BwZ54Iop5FZU0g&pid=ImgRaw&r=0";
  image2.alt = "Lake Itasca";

  imagesContainer.appendChild(image1);
  imagesContainer.appendChild(image2);
});
