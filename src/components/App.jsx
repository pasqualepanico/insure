import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";
import ContentsInTheMiddle from "./ContentsInTheMiddle";

function App() {
  const mBreakPoint = 576;
  const w = window.innerWidth;
  //console.log(w);

  return (
    <div>
      {w <= mBreakPoint ? <MobileNavBar /> : <Heading />}
      <ContentsInTheMiddle />
      <Footer />
    </div>
  );
}

export default App;
