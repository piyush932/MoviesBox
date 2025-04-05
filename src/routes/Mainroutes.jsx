import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Errorpage from "../pages/Errorpage";
import Loading from "../components/Loading/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback/ErrorFallback";

const MovieDetails = React.lazy(() => import("../pages/MovieDetails"));

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/movie/:id"
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
            <Suspense fallback={<Loading />}>
              <MovieDetails />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="/*" element={<Errorpage />} />
    </Routes>
  );
}

export default Mainroutes;
