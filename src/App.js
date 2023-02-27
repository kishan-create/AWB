import "./css/portal.css";

import Footer from "./components/common/Footer";
import Content from "./components/common/Content";
import { Header } from "./components/common/Header";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Content />
      {(() => {
        if (location.pathname !== "/login") {
          return (
            <div>
              <Header />

              <Footer />
            </div>
          );
        }
      })()}
    </div>
  );
}

export default App;
