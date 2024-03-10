import Accordion from "./components/accordion/Accordion";
import Place from "../src/Places";
import SearchableList from "./components/searchable/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";

const PLACES = [
 {
  id: "african-savanna",
  image: savannaImg,
  title: "African Savanna",
  description: "Experience the beauty of nature.",
 },
 {
  id: "amazon-river",
  image: amazonImg,
  title: "Amazon River",
  description: "Get to know the largest river in the world.",
 },
 {
  id: "caribbean-beach",
  image: caribbeanImg,
  title: "Caribbean Beach",
  description: "Enjoy the sun and the beach.",
 },
 {
  id: "desert-dunes",
  image: desertImg,
  title: "Desert Dunes",
  description: "Discover the desert life.",
 },
 {
  id: "forest-waterfall",
  image: forestImg,
  title: "Forest Waterfall",
  description: "Listen to the sound of the water.",
 },
];

function App() {
 return (
  <main>
   <section>
    <h2>Why Us?</h2>
    <Accordion className="accordion">
     <Accordion.item className="accordion-item" id="1">
      <Accordion.title className="accordion-item-title">Best in industry</Accordion.title>
      <Accordion.content className="accordion-item-content">
       <article>
        <p>Join us for great experience</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quasi.</p>
       </article>
      </Accordion.content>
     </Accordion.item>
     <Accordion.item className="accordion-item" id="2">
      <Accordion.title className="accordion-item-title">Affordable Plans</Accordion.title>
      <Accordion.content className="accordion-item-content">
       <article>
        <p>24X7 Service provided</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quasi.</p>
       </article>
      </Accordion.content>
     </Accordion.item>
    </Accordion>
   </section>
   <section>
    <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
     {(item) => <Place item={item} />}
    </SearchableList>
   </section>
  </main>
 );
}

export default App;
