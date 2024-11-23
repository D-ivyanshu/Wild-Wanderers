import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Images from "@/assets/images";
const ServiceCards = ({ imgLink, heading, capacity, time, duration, departure, }) => {
    return (_jsxs("div", { className: "cursor-pointer group relative flex flex-col my-6 bg-white shadow-md border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300", children: [_jsx("div", { className: "relative h-60 m-2.5 overflow-hidden bg-black text-white rounded-md", children: _jsx("img", { className: "object-fit transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110", src: imgLink, alt: "investment-seed-round" }) }), _jsxs("div", { className: "px-5 py-3", children: [_jsx("h6", { className: "mb-2 text-slate-700 text-xl font-medium", style: { fontFamily: "Poppins, sans-serif" }, children: heading }), _jsx("p", { className: "text-slate-700 leading-normal font-normal", children: _jsxs("ul", { children: [_jsxs("li", { children: ["Max People : ", capacity] }), _jsxs("li", { children: ["Duration : ", duration] }), _jsxs("li", { children: ["Timings : ", time] }), _jsxs("li", { children: ["Departure : ", departure] })] }) })] }), _jsxs("div", { className: "px-4 pb-4 pt-0 mt-3 relative", children: [_jsx("button", { className: "bg-gradient-to-r from-[#FF9413] to-[#DF6951] text-white font-medium px-5 w-28 h-10 rounded-2xl py-2 hover:opacity-90 transition-opacity text-lg flex items-center justify-center", children: _jsx("h1", { className: "text-sm", children: "Book now" }) }), _jsx("img", { src: Images.RegClaw, alt: "", className: "absolute right-5 bottom-4 h-16 w-16 -rotate-12" })] })] }));
};
export default ServiceCards;
