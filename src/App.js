import { useContext, useEffect } from "react";
import ClientLogin from "./pages/ClientLogin";
import ClientRegister from "./pages/ClientRegister";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import ProfessionalLogin from "./pages/ProfessionalLogin";
import ProfessionalRegister from "./pages/ProfessionalRegister";
import Workers from "./pages/Workers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import ProfessionalHome from "./pages/ProfessionalHome";
import ProfessionalRoute from "./components/ProfessionalRoute";
import ClientRoute from "./components/ClientRoute";
import Single from "./components/Single";
import ChatApp from "./pages/ChatApp";
import Requests from "./pages/Requests";
import LocationUpdater from "./components/LocationUpdater";
import Pay from "./pages/Pay";
import CompletionForm from "./pages/CompletionForm";
import StarRating from "./pages/StarRating";



function App() {
  const { user, professional } = useContext(AuthContext);

  return (
    <div className="App">
      {professional && <LocationUpdater />}{" "}
      {/* Render LocationUpdater if professional is logged in */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user && !professional ? (
                <Home />
              ) : !user && professional ? (
                <ProfessionalHome />
              ) : !user && !professional ? (
                <ClientLogin />
              ) : null
            }
          />

          <Route
            path="/client-login"
            element={
              !user && !professional ? (
                <ClientLogin />
              ) : !user && professional ? (
                <ProfessionalHome />
              ) : user && !professional ? (
                <Home />
              ) : null
            }
          />
          <Route
            path="/professional-login"
            element={!professional ? <ProfessionalLogin /> : <Home />}
          />
          <Route
            path="/client-register"
            element={!user ? <ClientRegister /> : <Home />}
          />
          <Route
            path="/professional-register"
            element={!professional ? <ProfessionalRegister /> : <Home />}
          />
          <Route
            path="/professional-home"
            element={
              <ProfessionalRoute>
                <ProfessionalHome />
              </ProfessionalRoute>
            }
          />
          <Route
            path="/client-request"
            element={
              <ClientRoute>
                <Requests />
              </ClientRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <ClientRoute>
                <Jobs />
              </ClientRoute>
            }
          />
          <Route
            path="/workers/:id"
            element={
              <ClientRoute>
                <Workers />
              </ClientRoute>
            }
          />
          <Route
            path="/workers/:id/:path"
            element={
              <ClientRoute>
                <Single />
              </ClientRoute>
            }
          />
          <Route path="/chat/:id" element={<ChatApp />} />
          <Route path="/pay/:id" element={<Pay />}/>
          <Route path="/completion-form/:id" element={<CompletionForm />}/>
          <Route path="/rating/:id" element={<StarRating />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
