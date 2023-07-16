import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
