import React from "react";
import Card from "./card";

import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./images/sorting.jpg";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import search from "./images/convexHull.png";
import puzzle from "./images/15puzzle.PNG";
import turing from "./images/turing.jpg";
import Stroid from "./images/stroid.png";
const Cards = () => {
  return (
    <div className="app grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 ">
      <Card imgsrc={graph} title="PathFinder" link="/Maze" />
      <Card imgsrc={Stroid} title="Astroid " link="/War" />
      <Card imgsrc={sort} title="Sorting" link="/Sort" />
      <Card imgsrc={queen} title="Snake Game" link="/Snake" />
      <Card
        imgsrc={primes}
        title="Sieve"
        link="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXc5NzdhdW5pbzFkNXl0dm1hYWh2cDN2MGtzdGxzM2hhOHlzcGdwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3XEgV9kfwLy1i/200.webp"
      />
      <Card imgsrc={search} title="Seaching" link="/Search" />
      {/* Add more Card components as needed */}
    </div>
  );
};

export default Cards;

// function Cards() {
//   return (
//     <div className="app">
//       <Card
//         imgsrc="path_to_image1"
//         title="Card 1 Title"
//         sname="Subtitle 1"
//         link="https://example.com/1"
//       />
//       <Card
//         imgsrc="path_to_image2"
//         title="Card 2 Title"
//         sname="Subtitle 2"
//         link="https://example.com/2"
//       />
//     </div>
//   );
// }

// ReactDOM.render(<Cards />, document.getElementById("root"));

// import React from 'react'

// const cards = () => {
//   return (
//     <div className="app">
//       <Card
//         imgsrc=""
//         title="Card 1 Title"
//         sname="Subtitle 1"
//         link="https://example.com/1"
//       />
//       <Card
//         imgsrc="path_to_image2"
//         title="Card 2 Title"
//         sname="Subtitle 2"
//         link="https://example.com/2"
//       />
//     </div>
//   );
// };

// export default cards;
