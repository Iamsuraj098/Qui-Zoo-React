import React from "react";
import NavBar from "./component/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./component/Cards";
import Home from "./component/Home";

function App() {
  let component = <Home/>;
  switch(window.location.pathname){
    case '/home':
      component = <Home/>
      break;
    case '/Animal':
      component = <Cards title={"Animal"} QuizNo={0} image={"Animal.jpg"}/>
      break;
    case '/Science':
      component = <Cards  title={"Science"} QuizNo={1} image={"Science.jpg"}/>
      break;
    case '/Maths':
      component = <Cards title={"Maths"} QuizNo={2} image={"Math.jpg"}/>
      break;
    case '/India':
      component = <Cards title={"India"} QuizNo={3} image={"India.png"}/>
  }
  return (
    <>
      <NavBar />
      {component}
    </>
  )
}

export default App
