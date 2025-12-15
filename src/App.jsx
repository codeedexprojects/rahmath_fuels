import HomePage from "./Features/Home/Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ServicePage from "./Features/Service/Pages/ServicePage";
import AboutPage from "./Features/About/Pages/AboutPage";
import ContactPage from "./Features/Contact/Pages/ContactPage";
import BlogPage from "./Features/Blog/Pages/BlogPage";
import BulkFuelDelivery from "./Features/Blog/Pages/BulkFuelDelivery";

import EnquiryForm from "./Features/Home/Components/EnquiryForm";


function App() {
  return (
    <>
   
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<ServicePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BulkFuelDelivery />} />
          
          <Route path="/EnquiryForm" element={<EnquiryForm />} />




       






          
        </Route>
      </Routes>
    </>
  );
}

export default App;
