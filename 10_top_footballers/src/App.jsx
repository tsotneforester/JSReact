import { useState } from "react";
import data from "./data";

import Person from "./components/Person";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [people, setPeople] = useState(data);

  function clickHandler() {
    if (people.length > 0) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(people);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPeople(items);
  }

  return (
    <Card>
      <h1>{people.length} Top Footballers</h1>

      <Person people={people} handleOnDragEnd={handleOnDragEnd} />
      <Button clickHandler={clickHandler} data={people} />
    </Card>
  );
}

export default App;
