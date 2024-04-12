import React, { useState } from "react";
import data from "./data";
import "./App.css";
import Tour from "./components/Tour";

//const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState(data);

  if (tours.length == 0) {
    return (
      <>
        <main>
          <button
            onClick={() => {
              setTours(data);
            }}>
            Refresh
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      {tours.map((item) => {
        return (
          <Tour
            key={item.id}
            {...item}
            setter={(e) => {
              setTours(
                tours.filter((tour) => {
                  return tour.id != e;
                })
              );
            }}
          />
        );
      })}
    </>
  );
}

export default App;
