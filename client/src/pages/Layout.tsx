import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="">
      <nav className="">
        <Navbar />
      </nav>

      <main className="">
        <Outlet />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};
