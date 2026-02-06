import React from "react";
import { Link } from "react-router-dom";

export default function List() {
  // LIST OF ALL DOCUMENTS, MANUAL FOR NOW
  return (
    <div>
      <Header>General</Header>
      <Item to='/'>Home</Item>
    </div>
  );
}

const Header = ({ children }) => {
  return <p className='text-neutral-200 font-semibold mt-2'>{children}</p>;
};
const Item = ({ children, to }) => {
  return (
    <Link to={to}>
      <p className='text-neutral-400 my-1'>{children}</p>
    </Link>
  );
};
