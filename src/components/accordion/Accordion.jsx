import { useContext, useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext(); //creating custom hook
export function useAccordionCtx() {
 const ctx = useContext(AccordionContext); //using custom hook
 return ctx;
}
//
export default function Accordion({ children, className }) {
 const [openItemId, setOpenItemId] = useState(); //state for opening item

 function toggleItem(id) {
  setOpenItemId((prevId) => (prevId === id ? null : id)); //for item toggle
 }

 //providing value
 const contextValue = {
  openItemId,
  toggleItem,
 };
 //
 return (
  <AccordionContext.Provider value={contextValue}>
   <ul className={className}>{children}</ul>
  </AccordionContext.Provider>
 );
}
Accordion.item = AccordionItem;
Accordion.title = AccordionTitle;
Accordion.content = AccordionContent;
