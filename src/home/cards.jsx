import React from "react";
import Card from "./card";

import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./images/sorting.jpg";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import convex from "./images/convexHull.png";
import puzzle from "./images/15puzzle.PNG";
import turing from "./images/turing.jpg";
import Stroid from "./images/stroid.png";
const Cards = () => {
  return (
    <div className="app grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 ">
      <Card imgsrc={graph} title="PathFinder" link="https://example.com/1" />
      <Card imgsrc={Stroid} title="Astroid " link="/War" />
      <Card imgsrc={sort} title="Sorting" link="/Sort" />
      <Card imgsrc={queen} title="N-Queen" link="https://example.com/2" />
      <Card imgsrc={primes} title="Sieve" link="https://example.com/2" />
      <Card imgsrc={convex} title="Seaching" link="/Search" />
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
