import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

import HomePage from "./Features/Home/Pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ServicePage from "./Features/Service/Pages/ServicePage";
import AboutPage from "./Features/About/Pages/AboutPage";
import ContactPage from "./Features/Contact/Pages/ContactPage";
import BlogPage from "./Features/Blog/Pages/BlogPage";
import BulkFuelDelivery from "./Features/Blog/Pages/BulkFuelDelivery";
import EnquiryForm from "./Features/Home/Components/EnquiryForm";
import FuelSupply from "./Features/FuelSupply/Pages/FuelSupply";
import Transpotation from "./Features/Transpotation/Pages/TranspotationPage";
import Quality from "./Features/Quality/Pages/Quality";
import EnviornmentalPage from "./Features/Enviornmental/Pages/EnviornmentalPage";
import LogoLoader from "./Components/Loader";
import TermsAndConditions from "./Terms/Terms";
import PrivacyPolicy from "./Terms/PrivacyPolicy";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoLoader />;
  }

  return (
    <>
      {/* ✅ ROUTES */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<ServicePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BulkFuelDelivery />} />
          <Route path="/FuelSupply" element={<FuelSupply />} />
          <Route path="/Transpotation" element={<Transpotation />} />
          <Route path="/Quality" element={<Quality />} />
          <Route path="/EnviornmentalPage" element={<EnviornmentalPage />} />
          <Route path="/EnquiryForm" element={<EnquiryForm />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />


        </Route>
      </Routes>

      {/* ✅ WHATSAPP FLOATING ICON (INLINE) */}
      <a
  href="https://wa.me/971509916875"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed bottom-6 right-6 z-50
    w-14 h-14
    flex items-center justify-center
    bg-[#25D366]
    hover:bg-[#20b957]
    text-white
    rounded-full
    shadow-xl
    transition-all duration-300
    hover:scale-105
  "
>
  <IoLogoWhatsapp className='text-white' size={28} />
</a>
    </>
  );
}

export default App;
