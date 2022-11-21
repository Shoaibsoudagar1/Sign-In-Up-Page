import "./App.css";
import Regsitration from "./component/Register";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./component/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Regsitration />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
