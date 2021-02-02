import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { textData } from './text';
 
export default function MappedAccordionComponent() {
    return (
        <Accordion
            allowMultipleExpanded
            allowZeroExpanded
        >
            {textData.accordion.map((item, index) => (
                <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {item.heading}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        {item.panel}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            ))}
        </Accordion>
    )
}