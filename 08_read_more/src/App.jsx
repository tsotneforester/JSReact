import ReadMore from "./components/ReadMore";

let lorem = "English could software nonprofit family today confront proclaim carrier spill value random regulatory disappointed chemical late notice humanity arena realm guidance switch bucket accent male place dirty heel adventure confuse step out general field consist hormone path indicator week fuel parental church shock casino drink conservation glance steam exciting within comment spit snake instruction boyfriend troop adviser Russian her significant streak top husband irony employer preserve surgeon continuous simultaneously opponent practice consider praise assume blue admire pure companion density taste stick button tour teaching collapse right selected threshold short pick routinely fall obligation spray queen note yield suit equity reinforce stadium pregnant each tea fool particular inspiration authority supplier yes French park pour face able quickly building concentrate match opening forehead patrol comment best emerge confession ally like meeting universe.";

function App() {
  return (
    <>
      <ReadMore ButtonColor="red" lessWords={20} startCollapsed={false} expandButtonText="Show more" collapseButtonText="Show less">
        {lorem}
      </ReadMore>
      <ReadMore ButtonColor="green" lessWords={40} startCollapsed={true} expandButtonText="Read more" collapseButtonText="Read less">
        {lorem}
      </ReadMore>
    </>
  );
}

export default App;
