import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2">
            <Sidebar />
          </div>
          <div className="col-xl-10">
            <Main />
          </div>                 
        </div>        
      </div>      
    </>
  );
}

export default App;
