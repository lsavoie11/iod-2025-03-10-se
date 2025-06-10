import React, { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://th.bing.com/th/id/OIP.XpCfkc8OSkhs63UzuJh1TgHaFF?w=266&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://th.bing.com/th/id/OIP.ystfiCHbAk8OVrsHFTMSsQHaFj?w=268&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://th.bing.com/th/id/OIP.wZlGNiSZb8ozhwhd-_txXwHaE8?w=272&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image:
      "https://th.bing.com/th/id/OIP.o-HFPpGWyWW7I_EdNQYwMgHaEo?w=306&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://img.freepik.com/premium-photo/snow-leopard-top-mountain-against-background-mountain-snow-landscape-magnificent_700453-2050.jpg?w=2000",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
  },
];

function BigCats() {
  const [cats, setCats] = useState(initialCats);

  const sortAlpha = () => {
    setCats([...cats].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const reverseList = () => {
    setCats([...cats].slice().reverse());
  };
  const filterPanthera = () => {
    setCats(initialCats.filter((cat) => cat.latinName.startsWith("Panthera")));
  };
  const resetList = () => {
    setCats(initialCats);
  };

  const handleAddCat = (cat) => {
    setCats([
      ...cats,
      {
        ...cat,
        id: cats.length ? Math.max(...cats.map((c) => c.id)) + 1 : 1,
      },
    ]);
  };

  const handleDeleteCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
      <h2>Big Cats</h2>
      <AddCatForm onAddCat={handleAddCat} />
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={sortAlpha} style={{ marginRight: "0.5rem" }}>
          Sort Alphabetically
        </button>
        <button onClick={reverseList} style={{ marginRight: "0.5rem" }}>
          Reverse List
        </button>
        <button onClick={filterPanthera} style={{ marginRight: "0.5rem" }}>
          Show Panthera Family
        </button>
        <button onClick={resetList}>Reset</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} onDelete={handleDeleteCat} />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
