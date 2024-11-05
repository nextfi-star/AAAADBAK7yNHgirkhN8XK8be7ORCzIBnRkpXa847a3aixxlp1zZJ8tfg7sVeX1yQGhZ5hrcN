"use client";
import { useState } from "react";
import { NextPage } from "next";

import ArrowBrackets from "./ArrowBracket";

interface Props {
  id: number;
  isOpen: boolean;
  toggleOpen: (val: number | null) => void;
  children: React.ReactNode;
  title: React.ReactNode;
  rightside: any;
}

const AccordionItem = ({
  id,
  isOpen,
  toggleOpen,
  children,
  title,
  rightside,
}: Props) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => toggleOpen(id)}>
        <div className={`${"accordion-header-content"}`}>
          <span>{title}</span>
          <p>
            {rightside}{" "}
            {isOpen ? (
              <ArrowBrackets />
            ) : (
              <ArrowBrackets className={`rotate`} />
            )}
          </p>
        </div>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

interface ParentProps {
  children: React.ReactNode;
  title: React.ReactNode;
  rightside: any;
}

const Accordion: NextPage<ParentProps> = ({ children, title, rightside }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleOpen = (id: any) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="accordion profile__balance__accordion">
      <AccordionItem
        id={1}
        isOpen={openItemId === 1}
        rightside={rightside}
        title={title}
        toggleOpen={toggleOpen}
      >
        {children}
      </AccordionItem>
    </div>
  );
};

export default Accordion;
