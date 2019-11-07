import React from "react";
import {Route} from "react-router-dom";

import CarPage from "./components/CarPage";
import TopHeader from "./components/TopHeader";

const App = () => {
  return (
    <>
    <TopHeader />
      <div>
      </div>
      <Route path="/:carId" component={CarPage} />
    </>
  )
}

export default App;