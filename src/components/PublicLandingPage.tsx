
import ServicesSection from "./ServicesSection";
import EventItemSelector from "./ EventItemSelector";
import Footer from "./Footer";
// import { getLandingPage } from "../../api/landingPagesApi";
import { useEffect, useState } from "react";
// import { getUserProfile } from "../../api/profileApi";
import PublicHero from "./PublicHero";
import { getLandingPage } from "./api/api";
// import { useLocation } from "react-router-dom";


export default function PublicLandingPage() {
  // const location = useLocation();
  const [landingPage] = useState<any>(null);
  const [profilePage] = useState<any>(null);
 
  useEffect(() =>{
     const currentUrl = window.location.href;
     const url = new URL(currentUrl);
     const token = url.searchParams.get("token")
    console.log("this is current page",currentUrl, token);
    
    if(token){
      getLandingPage(token)
      .then(res => console.log("Landing Page Data:", res.data))
      .catch(err => console.error("Error fetching landing page:", err));
    }

  },[])
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