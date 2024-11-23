import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fade } from "react-awesome-reveal";
import Images from "@/assets/images";
import TourCard from "@/components/TourCards";
const TourPackages = () => {
    return (_jsx(_Fragment, { children: _jsx("div", { className: "mt-10 flex justify-center items-center", children: _jsxs("div", { className: "w-full mx-9 md:mx-60 flex flex-col justify-center items-center", children: [_jsxs("div", { className: "tracking-wide w-full", children: [_jsx("h1", { className: "text-md lg:text-lg text-[#DF6951]", children: "Let's Explore" }), _jsx("h1", { className: "text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl", style: { fontFamily: "Roboto, sans-serif" }, children: "Tour Packages" })] }), _jsxs(Fade, { direction: "up", triggerOnce: true, children: [_jsx(TourCard, { imgLink: Images.TourWeekend, heading: "Corbett Weekend Tour", subHeading: "Jim Corbett All Zones", vehicle: "Jeep", days: "3 Days", nights: "2 Nights", meals: "All Meals" }), _jsx(TourCard, { imgLink: Images.TourDhikala, heading: "Dhikala Tiger Tour", subHeading: "Dhikala Zone", vehicle: "Jeep", days: "3 Days", nights: "2 Nights", meals: "All Meals" }), _jsx(TourCard, { imgLink: Images.TourWeekend, heading: "Corbett Nainital Tour", subHeading: "Nanital", vehicle: "Jeep", days: "5 Days", nights: "4 Nights", meals: "All Meals" })] })] }) }) }));
};
export default TourPackages;
