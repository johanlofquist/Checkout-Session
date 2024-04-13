import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import { authorize } from "../services/userService";
import { useUser } from "../context/UserContext";

export const Layout = () => {
  const { setLoggedInUser } = useUser();

  useEffect(() => {
    const session = async () => {
      const response = await authorize();
      if (response.status === 200) {
        const sessionUser = {
          email: response.data.email,
          stripeId: response.data.stripeId,
        };
        setLoggedInUser(sessionUser);
      }
    };
    session();
  }, []);
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
