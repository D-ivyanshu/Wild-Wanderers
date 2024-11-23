import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Images from "../assets/images";
import Navbar from "./Navbar";
import ModalWrapper from "../components/SpringModal";
const HomePage = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "relative h-screen text-white overflow-hidden", children: [_jsx("div", { className: "absolute inset-0", children: _jsx("img", { src: Images.HeroBannerSm, className: "object-cover object-center w-full h-full" }) }), _jsxs("div", { className: "relative flex flex-col justify-center", children: [_jsx("div", { children: _jsx(Navbar, {}) }), _jsxs("div", { className: "mt-[80px] flex flex-col items-center justify-center h-full text-center", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-2 text-white", children: "Get Closer to the Wild" }), _jsx("p", { className: "text-lg text-gray-300 mb-8", children: "Your Ultimate Safari Awaits!" }), _jsx(ModalWrapper, {})] })] })] }) }));
};
export default HomePage;
