import "./App.css";
import SideNav from "./Component/SideNav/SideNav";
import HomePage from "./Component/HomePage/HomePage";

function App() {
  // #edeef3#e6ffff background color
  return (
    <div className="d-flex" style={{background:"#edeef3"}}> 
      <div style={{flex:"1"}}>
      <SideNav/>
      </div >
      <div style={{flex:"5"}}><HomePage/></div>
      
    </div>
  );
}

export default App;
