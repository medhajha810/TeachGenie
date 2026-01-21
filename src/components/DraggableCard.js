import React, { useRef, useState, useEffect } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    animate,
    useVelocity,
    useAnimationControls,
    useInView,
} from "framer-motion";
import '../styles/draggable-gallery.css';

export const DraggableCardBody = ({
    className,
    children,
    style
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cardRef = useRef(null);
    const controls = useAnimationControls();
    const isInView = useInView(cardRef, { amount: 0.1 });
    const [constraints, setConstraints] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    });

    const velocityX = useVelocity(mouseX);
    const velocityY = useVelocity(mouseY);

    const springConfig = {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    };

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), springConfig);
    const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig);
    const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig);

    useEffect(() => {
        const updateConstraints = () => {
            if (typeof window !== "undefined") {
                setConstraints({
                    top: -window.innerHeight, // Allow wider range
                    left: -window.innerWidth,
                    right: window.innerWidth,
                    bottom: window.innerHeight,
                });
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);
        return () => {
            window.removeEventListener("resize", updateConstraints);
        };
    }, []);

    // Scatter and Return Animation on View Entry
    useEffect(() => {
        if (isInView) {
            // Scatter Animation
            // Use provided scatterTarget or fallback to constrained grid
            const scatterX = style?.scatterTarget?.x ?? ((Math.random() - 0.5) * 500);
            const scatterY = style?.scatterTarget?.y ?? ((Math.random() - 0.5) * 400);
            const scatterRotate = style?.scatterTarget?.rotate ?? ((Math.random() - 0.5) * 40);

            const sequence = async () => {
                // Step 1: Scatter outward
                await controls.start({
                    x: scatterX,
                    y: scatterY,
                    rotate: scatterRotate,
                    scale: 0.6, // Strict scale down to 0.6
                    zIndex: 10,
                    transition: { duration: 1, ease: "backOut" }
                });


                // Wait for 5 seconds (Stay scattered)
                await new Promise(resolve => setTimeout(resolve, 5000));

                // Step 2: Return to stack
                await controls.start({
                    x: 0,
                    y: 0,
                    rotate: style?.rotate || 0, // Return to original fan rotation
                    scale: 1,
                    zIndex: 1,
                    transition: { duration: 1.2, type: "spring", bounce: 0.2 }
                });
            };
            sequence();
        } else {
            // Reset when scrolling away
            controls.start({
                x: 0,
                y: 0,
                rotate: style?.rotate || 0,
                opacity: 0, // Fade out slightly when leaving
                transition: { duration: 0.5 }
            });
        }
    }, [isInView, controls, style?.rotate]);

    // Fade in opacity when entering (separate from scatter which handles position)
    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, transition: { duration: 0.5 } });
        }
    }, [isInView, controls]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
            cardRef.current?.getBoundingClientRect() ?? {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
            };
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        mouseX.set(deltaX);
        mouseY.set(deltaY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            drag
            dragMomentum={false} // Disable momentum to stop drift
            dragConstraints={constraints}
            onDragStart={() => {
                document.body.style.cursor = "grabbing";
            }}
            onDragEnd={(event, info) => {
                document.body.style.cursor = "default";

                // Only reset rotation, NOT position (x, y)
                controls.start({
                    rotateX: 0,
                    rotateY: 0,
                    transition: {
                        type: "spring",
                        ...springConfig,
                    },
                });
            }}
            style={{
                rotateX,
                rotateY,
                opacity,
                willChange: "transform",
                ...style
            }}
            animate={controls}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`draggable-card ${className || ''}`}
        >
            {children}
            <motion.div
                style={{
                    opacity: glareOpacity,
                }}
                className="draggable-card-glare"
            />
        </motion.div>
    );
};

export const DraggableCardContainer = ({
    className,
    children
}) => {
    return (<div className={`draggable-card-container ${className || ''}`}>{children}</div>);
};
