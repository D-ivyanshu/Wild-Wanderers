import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
const SwipeCards = () => {
    const originalCards = cardData; // Backup of the original card data
    const [cards, setCards] = useState(cardData);
    React.useEffect(() => {
        if (cards.length === 0) {
            // Delay before restoring cards
            const timeout = setTimeout(() => {
                setCards(originalCards); // Restore the cards
            }, 1000); // Adjust delay as needed (in milliseconds)
            return () => clearTimeout(timeout); // Cleanup timeout
        }
    }, [cards, originalCards]);
    return (_jsxs("div", { className: "grid h-[500px] w-full place-items-center", children: [cards.map((card) => {
                return (_jsx(Card, { cards: cards, setCards: setCards, ...card }, card.id));
            }), cards.length === 0 && (_jsx("p", { className: "text-gray-600", children: "All cards swiped! Restoring..." }))] }));
};
const Card = ({ id, url, setCards, cards }) => {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
    const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
    const isFront = id === cards[cards.length - 1].id;
    const rotate = useTransform(() => {
        const offset = isFront ? 0 : id % 2 ? 6 : -6;
        return `${rotateRaw.get() + offset}deg`; // Keep the unit
    });
    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 100) {
            setCards((prev) => prev.filter((v) => v.id !== id));
        }
    };
    return (_jsx(motion.img, { src: url, alt: "Placeholder alt", className: "h-96 w-72 origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing", style: {
            zIndex: isFront ? 1 : 0,
            gridRow: 1,
            gridColumn: 1,
            x,
            opacity,
            rotate,
        }, animate: {
            scale: isFront ? 1 : 0.98,
        }, drag: isFront ? "x" : false, dragConstraints: {
            left: 0,
            right: 0,
        }, onDragEnd: handleDragEnd }));
};
export default SwipeCards;
const cardData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 8,
        url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
