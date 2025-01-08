// // document.writeln("<p style=color:blue;>External JS file </p>");

// // console.log("welcome to console");

// // console.warn("be alert warning");

// // console.error("error found");




// function bottles_required(gallons_of_beer) {
//     let bottles = 0;
//     let sizes = [10, 7, 5, 1];
    
//     for (let size of sizes) {
//         bottles += Math.floor(gallons_of_beer / size);
//         gallons_of_beer %= size;
//     }
    
//     return bottles;
//   }
  
//   // Example 1
//   console.log(bottles_required(17)); // Output: 2
  
//   // Example 2
//   console.log(bottles_required(13)); // Output: 3

import React, { useState } from 'react';

// Example data: country and capital pairs
const CountryCapitalGame = ({ data }) => {
  // Convert the data object into an array of country-capital pairs
  const pairs = Object.entries(data).flatMap(([country, capital]) => [
    { name: country, type: 'country' },
    { name: capital, type: 'capital' }
  ]);

  // Shuffle the pairs array to display in random order
  const [shuffledPairs, setShuffledPairs] = useState(pairs.sort(() => Math.random() - 0.5));
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState([]);

  // Handle button click
  const handleClick = (pair) => {
    if (selected.length === 1 && selected[0].type !== pair.type) {
      const isMatch = data[selected[0].name] === pair.name || data[pair.name] === selected[0].name;
      if (isMatch) {
        setMatched([...matched, selected[0].name, pair.name]);
        setShuffledPairs(shuffledPairs.filter(p => p.name !== selected[0].name && p.name !== pair.name));
      } else {
        setWrongPair([selected[0], pair]);
        setTimeout(() => {
          setWrongPair([]);
        }, 1000); // Reset after 1 second
      }
      setSelected([]);
    } else {
      setSelected([pair]);
    }
  };

  return (
    <div>
      {shuffledPairs.map((pair) => (
        <button
          key={pair.name}
          onClick={() => handleClick(pair)}
          style={{
            backgroundColor:
              matched.includes(pair.name) ? '#008000' : // Green for matched
              wrongPair.some((p) => p.name === pair.name) ? '#ff0000' : // Red for wrong pairs
              selected.some((p) => p.name === pair.name) ? '#0000ff' : 'white' // Blue for selected
          }}
          disabled={matched.includes(pair.name)}
        >
          {pair.name}
        </button>
      ))}

      {shuffledPairs.length === 0 && <p>Congratulations!</p>}
    </div>
  );
};

// Example usage with the provided data
export default function App() {
  const data = { Germany: 'Berlin', Azerbaijan: 'Baku', Mali: 'Bamako', Portugal: 'Lisboa', Zambia: 'Lusaka' };
  return <CountryCapitalGame data={data} />;
}
