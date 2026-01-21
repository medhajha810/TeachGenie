import React from "react";
import { motion } from "framer-motion";

export const Boxes = () => {
    const rows = new Array(30).fill(1); // Reduced count for performance
    const cols = new Array(20).fill(1);
    let colors = [
        "--sky-300",
        "--pink-300",
        "--green-300",
        "--yellow-300",
        "--red-300",
        "--purple-300",
        "--blue-300",
        "--indigo-300",
        "--violet-300",
    ];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
                position: "fixed", // Fixed background
                top: 0,
                left: 0,
                zIndex: 0,
                display: "flex",
                width: "100%",
                height: "100%",
                pointerEvents: "none", // Allow clicks to pass through wrapper, but enable on children via all: unset? No, let's keep wrapper pointer-events none and enable on children.
            }}
            className="boxes-container"
        >
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                pointerEvents: "none",
                background: "radial-gradient(transparent, transparent, #111)", // Vignette
            }} />

            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols.length}, 1fr)`,
                width: "150vw", // Oversized
                height: "150vh",
                pointerEvents: "auto", // Re-enable for hover
            }}>
                {rows.map((_, i) => (
                    cols.map((_, j) => (
                        <motion.div
                            key={`cell-${i}-${j}`}
                            whileHover={{
                                backgroundColor: `var(${getRandomColor()})`,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            style={{
                                width: "100%",
                                height: "4rem", // Visible height
                                borderRight: "1px solid rgba(255, 255, 255, 0.1)", // Darken/Visible border
                                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                                position: "relative",
                            }}
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                                    style={{
                                        position: "absolute",
                                        top: "-10px",
                                        left: "-10px",
                                        width: "20px",
                                        height: "20px",
                                        color: "rgba(255,255,255,0.1)", // Subtle plus
                                        pointerEvents: "none"
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default Boxes;
