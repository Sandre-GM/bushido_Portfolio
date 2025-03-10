import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useModeStore } from "../store";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  const mode = useModeStore((state) => state.mode);
  return (
    <>
      <Header />
      <ToastContainer />
      {mode ? (
        <main className="bg-BsGray-100">
          <Outlet />
        </main>
      ) : (
        <main className="bg-BsBlue-100">
          <Outlet />
        </main>
      )}
      <Footer />
    </>
  );
}
