import React, { useRef, useState } from "react";
import SpecsScroller from "../IndividualItems/SpecsScroller";

function VehicleSpec() {
    const containerRef = useRef(null)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsDown(true)
        setStartX(e.pageX - containerRef.current.offsetLeft)
        setScrollLeft(containerRef.current.scrollLeft)
    }
    const handleMouseLeave = () => setIsDown(false)
    const handleMouseUp = () => {
        setIsDown(false);
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const children = Array.from(container.children);
        let closestChild = null;
        let minDistance = Infinity;

        children.forEach(child => {
            const childRect = child.getBoundingClientRect();
            const childCenter = childRect.left + childRect.width / 2;
            const distance = Math.abs(containerCenter - childCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestChild = child;
            }
        });

        if (closestChild) {
            closestChild.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    };

    const handleMouseMove = (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - containerRef.current.offsetLeft
        const walk = x - startX
        containerRef.current.scrollLeft = scrollLeft - walk
    }
    return (
        <section className="bg-white mx-0 min-w-0 max-w-full transition-[opacity_.25s_ease-in-out_0s,visibility_.25s_ease-in-out_0s]  overflow-y-hidden">
            <p-carousel className="flex !gap-[clamp(16px,1.25vw+12px,36px)] flex-col box-content">
                <div className="specs-header-head grid p-[0_max(22px,10.625vw-12px)]">
                    <div className="spec-heading !max-w-[56.25rem] !m-[0_0_0] " >
                        <h2 className="text-center">Driving dynamics.</h2>
                        <p className="spec !pb-[clamp(16px,1.25vw+12px,36px)] justify-center !pt-[clamp(8px,.5vw+6px,16px)] text-center !m-0 !text-black">
                            The Panamera models combine sporty driving dynamics and a high level of driving comfort – both in terms of longitudinal and lateral dynamics. The perfectly coordinated combination of a high-performance drivetrain, the Porsche Doppelkupplung (PDK) and the chassis ensures impressive overall performance.
                        </p>
                    </div>
                    <div className="specs-item-scroller overflow-hidden p-[4px_0] m-[-4px_0] cursor-grab relative !px-[0_max(22px,10.625vw-12px)] flex " ref={containerRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} style={{ cursor: isDown ? "grabbing" : "grab", overflowX: "auto", whiteSpace: "nowrap", userSelect: "none", scrollSnapType: "x mandatory", scrollBehavior: "smooth", display: "flex", scrollPaddingInline: "50%" }}>
                        <SpecsScroller />
                    </div>
                </div>
            </p-carousel>
        </section>
    );
}

export default VehicleSpec;
