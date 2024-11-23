import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SwipeCards from "@/components/SwipeCards";
const Gallery = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col items-center my-6", children: [_jsxs("div", { className: "tracking-wide flex flex-col justify-center items-center", children: [_jsx("h1", { className: "text-md lg:text-lg text-[#DF6951]", children: "Captured Moments" }), _jsx("h1", { className: "text-2xl md:text-3xl text-slate-800 font-medium lg:text-4xl", style: { fontFamily: "Roboto, sans-serif" }, children: "Wildlife Wonders" })] }), _jsx(SwipeCards, {})] }) }));
};
export default Gallery;
