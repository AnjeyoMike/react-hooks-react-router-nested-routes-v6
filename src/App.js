/*function App() {
  return (
    <>
      <header>
        
      </header>
    </>
  );
};

export default App;*/

// App.js
// App.js
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}
export default App;
