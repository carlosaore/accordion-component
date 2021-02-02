import styled from "styled-components";
import AccordionComponent from "./AccordionComponent";
import './accordion-component.css';
import MappedAccordionComponent from "./MappedAccordionComponent";

const Div = styled.div`
  width : 80%;
  margin-left : auto;
  margin-right : auto;
`
//I like styled components. I'm only using them here but this is a coding sandbox so it's allowed :)

function App() {
  return (
    <Div>
      <p>A static accordion component:</p>
      <AccordionComponent />
      <p>A dynamically mapped accordion component from an object containg the strings:</p>
      <MappedAccordionComponent />
    </Div>
  );
}

export default App;
