import SliderMain from "../../component/slider/slider";
import Accordion from "../../component/accordion/accordion";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main_content">
          <SliderMain />
          <div className="accordion">
          <Accordion title="first" content="content first accordion"/>
          <Accordion title="second" content="content second accordion"/>
          <Accordion title="third" content="content third accordion"/>
          </div>
        </div>
      </div>
    </main>
  );
}
