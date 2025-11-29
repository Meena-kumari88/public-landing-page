
import ServicesSection from "./ServicesSection";
import EventItemSelector from "./ EventItemSelector";
import Footer from "./Footer";
// import { getLandingPage } from "../../api/landingPagesApi";
import { useState, useEffect } from "react";
// import { getUserProfile } from "../../api/profileApi";
import PublicHero from "./PublicHero";


export default function PublicLandingPage() {
  const [landingPage, setLandingPage] = useState<any>(null);
  const [profilePage, setProfilePage] = useState<any>(null);
//   useEffect(() => {
//     const fetchLandingPage = async () => {
//       try {
//         const res = await getLandingPage();
//         console.log(res.data, "this is res.data");
//         // profile data getting
//         const resProfile = await getUserProfile();
//         console.log(resProfile.data, "this is profile data");
//         setProfilePage(resProfile.data);

//         setLandingPage(res.data);
//       } catch (err: any) {
//         console.error("Failed to fetch landing page:", err);
//       }
//     };
//     fetchLandingPage();
//   }, []);
//   console.log(landingPage, "this is landingPage");


  return (
   <main className="w-full bg-white overflow-hidden">
  <PublicHero landingPage={landingPage} profile={profilePage} />
  <ServicesSection landingPage={landingPage} profile={profilePage} />
  <EventItemSelector landingPage={landingPage} profile={profilePage} />
  <Footer landingPage={landingPage} profile={profilePage} />
</main>

  );
}