import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Notes from "./components/notes";
import Goals from "./components/goals";
import Principles from "./components/principles";
import Layout from "./components/layout";
import NotFound from "./components/notFound";
import Page from "./classes/page";
import AreasOfDevelopment from "./components/areasOfDevelopment";
import DragDrop2 from "./components/DragDrop2";
import Areas from "./components/areas";

const App = () => {
  const pages = [
    // new Page("Notes", <Notes goals={goals} principles={principles}></Notes>),

    // new Page("Goals", <Goals />),
    new Page("Areas of Development", <Areas></Areas>),
    // new Page("Drag Drop", <DragDrop2></DragDrop2>),
    // new Page("Drag Drop", <AreasOfDevelopment />),
    // new Page("Principles", <Principles />),
  ];

  const routes = (
    <Routes>
      {pages.map((page) => (
        <Route path={page.path} element={page.element} key={page.key} />
      ))}
      {/* <Route path="/" element={<Navigate replace to="/goals" />} /> */}
      <Route path="/" element={<Navigate replace to={pages[0].path} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return <Layout pages={pages} content={routes} />;
};

export default App;
