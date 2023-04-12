import { Component } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./Navbar/Navbar";
class Main extends Component {
  render() {
    return (
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        ></link>
        <Routes>
          <Route path="/" Component={Navbar} />
        </Routes>
      </div>
    );
  }
}
export default Main;
