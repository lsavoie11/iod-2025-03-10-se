let intervalId;
let isReloading = true; // Flag to track if reloading is active

function addCard(news) {
  const template = document
    .getElementById("news-template")
    .content.cloneNode(true);
  template.querySelector(".news-title").innerText = news.title;
  template.querySelector(".news-text").innerText = news.content;
  document.querySelector("#news-list").appendChild(template);
}

const newsItems = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function updateNews() {
  if (!isReloading) return; // Prevent updates if reloading is stopped
  const newsList = document.querySelector("#news-list");
  newsList.innerHTML = ""; // Clear existing news
  newsItems.forEach(addCard); // Populate with updated news
}

function toggleReloading(action) {
  if (action === "start") {
    if (!isReloading) {
      isReloading = true;
      intervalId = setInterval(updateNews, 5000);
      alert("News reloading has been resumed.");
    }
  } else if (action === "stop") {
    isReloading = false;
    clearInterval(intervalId);
    alert("News reloading has been suspended.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initial population of news
  updateNews();
  intervalId = setInterval(updateNews, 5000);

  // Add news button functionality
  document.getElementById("add-news").addEventListener("click", function () {
    const title = document.getElementById("news-title").value.trim();
    const content = document.getElementById("news-content").value.trim();

    if (!title || !content) {
      alert("Both title and content are required to add news.");
      return;
    }

    newsItems.push({ id: newsItems.length + 1, title, content });

    // Only update the news list if reloading is active
    if (isReloading) {
      updateNews();
    }

    // Clear input fields
    document.getElementById("news-title").value = "";
    document.getElementById("news-content").value = "";

    alert("News added successfully.");
  });

  // Stop and start reloading buttons
  document.getElementById("stop-reload").addEventListener("click", function () {
    toggleReloading("stop");
  });

  document
    .getElementById("start-reload")
    .addEventListener("click", function () {
      toggleReloading("start");
    });
});
