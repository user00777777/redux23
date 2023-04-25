import { Link, Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/m"> Тельфера </Link>

        <Link to="/first">First</Link>
        <Link to="/one">OneComponent</Link>
        <Link to="/workers"> Дежурные</Link>
        {/* <Link to ='main'>Главная</Link> */}
      </header>
      <main className="container">
        <Outlet />
      </main>
      {/* <footer className="container">ReactProgect</footer> */}
    </>
  );
};
export  default Layout ;
