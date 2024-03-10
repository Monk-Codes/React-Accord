import { useAccordionCtx } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children, className }) {
 const { openItemId } = useAccordionCtx();
 const id = useAccordionItemContext();

 const isOpen = openItemId === id; //checking which item is open

 return <div className={isOpen ? `${className ?? ""} open` : `${className ?? ""} close`}>{children}</div>;
}
