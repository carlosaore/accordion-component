import styled from "styled-components";
import AccordionComponent from "./AccordionComponent";
import './accordion-component.css';
import MappedAccordionComponent from "./MappedAccordionComponent";

const P = styled.p`
  font-family : sans-serif
`

const Div = styled.div`
  width : 80%;
  margin-left : auto;
  margin-right : auto;
`

function App() {
  return (
    <Div>
      <P>A static accordion component:</P>
      <AccordionComponent />
      <P>A dynamically mapped accordion component from an object containg the strings:</P>
      <MappedAccordionComponent />
    </Div>
  );
}

export default App;
