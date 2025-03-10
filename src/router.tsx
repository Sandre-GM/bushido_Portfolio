import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Layout = lazy(() => import("./layouts/Layout"));
const IndexPage = lazy(() => import("./views/IndexPage"));
const ContactPage = lazy(() => import("./views/ContactPage"));
const About = lazy(() => import("./views/About"));
const Gallery = lazy(() => import("./views/Gallery"));

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Suspense fallback={<Loading />}>
              <Layout />
            </Suspense>
          }>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loading />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loading />}>
                <ContactPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
