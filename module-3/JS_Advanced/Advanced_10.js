import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

//Exercise B
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

fetchURLData("https://jsonplaceholder.typicode.com/invalid-endpoint")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

// Exercise A
async function fetchURLData2(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

//Exercise B
fetchURLData2("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

fetchURLData2("https://jsonplaceholder.typicode.com/invalid-endpoint")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

//Exercise C
async function fetchMultipleURLs(urls) {
  try {
    const fetchPromises = urls.map(async (url) => {
      const response = await fetch(url);
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error(
          `Request to ${url} failed with status ${response.status}`
        );
      }
    });

    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Test the function with multiple URLs
fetchMultipleURLs([
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/1",
])
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
