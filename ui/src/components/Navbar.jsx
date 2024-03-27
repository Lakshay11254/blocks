import React from "react";


const Navbar = () => {

  return (
    <div className="navbar">
        <h1 className="navbar-title">Blockchain Explorer</h1>
        <div className="navbar-links">
            <a href="/blocks/addresses">Blocks</a>
            <a href="/transactions/send">Transactions</a>
        </div>
    </div>

  );
};

export default Navbar;
