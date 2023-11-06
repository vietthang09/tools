import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routers } from "./routers";

function App() {
  return (
    <div className="font-poppins overflow-hidden">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
