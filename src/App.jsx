import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisSmooth from "@/components/LenisSmooth";
import ScrollToTop from "./components/ScrollToTop";

// Page Components
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AuthorisedUnifromBooksellers from "./pages/AuthorisedUnifromBooksellers";
import FAQs from "./pages/FAQs";
import Policies from "./pages/Policies";
import Careers from "./pages/Careers";
import ChairmanMessage from "./pages/ChairmanMessage";
import ContactUs from "./pages/ContactUs";
import CurriculumEarlyYears from "./pages/CurriculumEarlyYears";
import DirectorMessage from "./pages/DirectorMessage";
import ExtraCurricularActivities from "./pages/ExtraCurricularActivities";
import Library from "./pages/Library";
import OnlineAdmission from "./pages/OnlineAdmission";
import OurJourney from "./pages/OurJourney";
import OurPhilosophy from "./pages/OurPhilosophy";
import ParentingWorkshop from "./pages/ParentingWorkshop";
import SocietyAndClubs from "./pages/SocietyAndClubs";
import StudentCounselling from "./pages/StudentCounselling";
import StudentLifeSlug from "./pages/StudentLifeSlug";
import TeacherTraining from "./pages/TeacherTraining";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#120224]">
      <LenisSmooth />
      <ScrollToTop />
      <main className="relative min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/AboutUs/AuthorisedUnifromBooksellers" element={<AuthorisedUnifromBooksellers />} />
          <Route path="/AboutUs/FAQs" element={<FAQs />} />
          <Route path="/AboutUs/Policies" element={<Policies />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/ChairmanMessage" element={<ChairmanMessage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Curriculum/EarlyYears" element={<CurriculumEarlyYears />} />
          <Route path="/DirectorMessage" element={<DirectorMessage />} />
          <Route path="/ExtraCurricularActivities" element={<ExtraCurricularActivities />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/OnlineAdmission" element={<OnlineAdmission />} />
          <Route path="/OurJourney" element={<OurJourney />} />
          <Route path="/OurPhilosophy" element={<OurPhilosophy />} />
          <Route path="/ParentingWorkshop" element={<ParentingWorkshop />} />
          <Route path="/SocietyAndClubs" element={<SocietyAndClubs />} />
          <Route path="/StudentCounselling" element={<StudentCounselling />} />
          <Route path="/StudentLife/:slug" element={<StudentLifeSlug />} />
          <Route path="/TeacherTraining" element={<TeacherTraining />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
