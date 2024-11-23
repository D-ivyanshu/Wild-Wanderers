import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-nocheck
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { useState } from "react";
import Images from "../assets/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name must be not be empty.",
    }),
    phno: z
        .string()
        .min(1, {
        message: "Phone number must not be empty.",
    })
        .regex(/^\d+$/, { message: "Phone number must contain only digits." })
        .length(10, { message: "Phone number must be 10 digits long." }),
    date: z
        .date()
        .refine((val) => val.getTime() >= new Date().setHours(0, 0, 0, 0), {
        message: "Date must be today or later.",
    }),
    requirements: z.string().min(1, {
        message: "Requirements must be not be empty.",
    }),
});
const ModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => setIsOpen(true), className: "bg-gradient-to-r from-[#FF9413] to-[#DF6951] text-white font-medium px-5 w-36 h-10 rounded-2xl py-2 hover:opacity-90 transition-opacity text-lg flex items-center justify-center", children: "Book now" }), _jsx(SpringModal, { isOpen: isOpen, setIsOpen: setIsOpen })] }));
};
const SpringModal = ({ isOpen, setIsOpen }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phno: "",
            date: null,
            requirements: "",
        },
    });
    function closeModal() {
        form.reset();
        form.clearErrors();
        setIsOpen(false);
    }
    function onSubmit(values) {
        console.log(values);
        closeModal();
    }
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => setIsOpen(false), className: "bg-slate-900/20 backdrop-blur p-5 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer", children: _jsxs(motion.div, { initial: { scale: 0, rotate: "12.5deg" }, animate: { scale: 1, rotate: "0deg" }, exit: { scale: 0, rotate: "0deg" }, onClick: (e) => e.stopPropagation(), className: " text-white rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden", style: {
                    backgroundImage: `url(${Images.ModalBg})`, // Background image applied here
                    backgroundSize: "cover", // Ensure the image covers the whole div
                    backgroundPosition: "center", // Center the image within the div
                }, children: [_jsx(FiAlertCircle, { className: "text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" }), _jsx("div", { onClick: () => closeModal(), className: "absolute top-4 right-5 w-4 h-4 z-50 bg-black", children: _jsx(FiX, { size: 20 }) }), _jsxs("div", { className: "relative z-10 px-5 py-12", children: [_jsx("div", { className: "mb-2 text-3xl text-indigo-600 grid place-items-center mx-auto", children: _jsx("img", { src: Images.ClawIcon, alt: "", className: "w-10 h-25" }) }), _jsxs("h3", { className: "text-3xl font-bold text-center", children: ["Ready for a Safari? ", _jsx("br", {})] }), _jsx("h3", { className: "text-2xl font-semibold text-center text-white mb-3", children: "Enquire Now" }), _jsx("div", { children: _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4 px-3 py-3", children: [_jsx(FormField, { control: form.control, name: "name", render: ({ field }) => (_jsxs(FormItem, { className: "flex flex-col items-start", children: [_jsx(FormLabel, { children: "Name" }), _jsx(FormControl, { children: _jsx(Input, { ...field }) })] })) }), _jsx(FormField, { control: form.control, name: "phno", render: ({ field }) => (_jsxs(FormItem, { className: "flex flex-col items-start", children: [_jsx(FormLabel, { children: "Ph no." }), _jsx(FormControl, { children: _jsx(Input, { ...field, type: "mobile" }) })] })) }), _jsx(FormField, { control: form.control, name: "date", render: ({ field }) => (_jsxs(FormItem, { className: "flex flex-col items-start", children: [_jsx(FormLabel, { children: "Date" }), _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(FormControl, { children: _jsxs(Button, { variant: "outline", className: cn("w-full pl-3 bg-transparent text-left font-normal", !field.value && "text-muted-foreground"), children: [field.value ? (format(field.value, "PPP")) : (_jsx("span", { children: " " })), _jsx(CalendarIcon, { className: "ml-auto h-4 w-4 opacity-50" })] }) }) }), _jsx(PopoverContent, { className: "w-auto p-0", align: "start", children: _jsx(Calendar, { mode: "single", selected: field.value, onSelect: field.onChange, disabled: (date) => date > new Date() ||
                                                                            date < new Date("1900-01-01"), initialFocus: true }) })] })] })) }), _jsx(FormField, { control: form.control, name: "requirements", render: ({ field }) => (_jsxs(FormItem, { className: "flex flex-col items-start", children: [_jsx(FormLabel, { children: "Requirements" }), _jsx(FormControl, { children: _jsx(Textarea, { className: "resize-none", ...field }) })] })) }), _jsx("button", { type: "submit", className: "bg-slate-50 text-[#DF6951] font-semibold py-3 px-5 rounded", children: "Submit!" })] }) }) })] })] }) })) }));
};
export default ModalWrapper;
