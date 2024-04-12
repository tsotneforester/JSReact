import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import { PropagateLoader } from "react-spinners";
import Clock from "./Clock";

let counter = 0;

function App() {
  const { zones } = useContext(AppContext);
  let [time, setTime] = useState([]);

  useEffect(() => {
    if (zones) {
      let updateTime = setInterval(() => {
        counter += 1;
        let newArray = zones.map((e) => {
          return {
            zoneName: e.zoneName.split("/")[1], // remove region
            second: new Date((e.timestamp + counter) * 1000).getUTCSeconds(),
            minute: new Date((e.timestamp + counter) * 1000).getUTCMinutes(),
            hour: new Date((e.timestamp + counter) * 1000).getUTCHours(),
          };
        });
        setTime(newArray);
      }, 1000);
      return () => clearInterval(updateTime);
    }
  }, [zones, time]);

  return <>{zones ? <Clock data={time} /> : <PropagateLoader color="black" />}</>;
}

export default App;
