import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./index.css";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
}

export default App;
