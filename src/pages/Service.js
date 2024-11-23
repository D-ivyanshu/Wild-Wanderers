import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ServiceCards from "@/components/ServiceCards";
import { Fade } from "react-awesome-reveal";
import Images from "@/assets/images";
const Service = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col items-center my-6", children: [_jsxs("div", { className: "tracking-wide flex flex-col justify-center items-center", children: [_jsx("h1", { className: "text-md lg:text-lg text-[#DF6951]", children: "Services" }), _jsx("h1", { className: "text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl", style: { fontFamily: "Roboto, sans-serif" }, children: "Plan your safari" })] }), _jsxs(Fade, { direction: "up", triggerOnce: true, children: [_jsx(ServiceCards, { imgLink: Images.Jeep, heading: "Corbett Jeep Safari", capacity: "6 per Jeep", time: "Morning & Evening", duration: "3 hours", departure: "Ramnagar" }), _jsx(ServiceCards, { imgLink: Images.Canter, heading: "Dhikala Canter Safari ", capacity: "16 per Canter", time: "Morning & Evening", duration: "5 hours", departure: "Ramnagar" })] })] }) }));
};
export default Service;
