fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((data) => {
    const cardList = document.getElementById("card-list");
    const template = document.getElementById("card-template");

    data.forEach((post) => {
      const clone = template.content.cloneNode(true);
      clone.querySelector(".card-title").innerText = post.title;
      clone.querySelector(".card-text").innerText = post.body;
      cardList.appendChild(clone);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
