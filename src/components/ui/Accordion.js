"use client";

import React, { useState } from "react";

import ArrowBrackets from "../ui/ArrowBracket";

const AccordionItem = ({ id, isOpen, toggleOpen, children, title, rightside, className }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => toggleOpen(id)}>
        <div className={`${"accordion-header-content"}`}>
          <span>{title}</span>
          <p>
            {rightside} {isOpen ? <ArrowBrackets /> : <ArrowBrackets className={`rotate`} />}
          </p>
        </div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const Accordion = ({ children, title, rightside }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleOpen = id => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="accordion">
      <AccordionItem id={1} isOpen={openItemId === 1} toggleOpen={toggleOpen} title={title} rightside={rightside}>
        {children}
      </AccordionItem>
    </div>
  );
};

export default Accordion;
