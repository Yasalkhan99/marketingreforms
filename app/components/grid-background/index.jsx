
"use client";
import React, { useEffect, useState } from "react";

export default function GridBackground({ className, verticalClassName, horizontalClassName }) {
    const [delays, setDelays] = useState([]);

    useEffect(() => {
        // Generate random delay for EACH drop
        const randomDelays = Array.from({ length: 12 }).map(
            () => Math.random() * 2 + 0.3 // between 0.3s – 2.3s
        );
        setDelays(randomDelays);
    }, []);

    return (
        <div className={`grid-background ${className}`}>
            {/* Vertical Lines */}
            <div className={`v-lines ${verticalClassName}`}>
                {delays.map((delay, index) => (
                    <div className="v-line" key={index}>
                        <div
                            className="drop"
                            style={{ animationDelay: `${delay}s` }}
                        ></div>
                    </div>
                ))}
            </div>

            {/* Horizontal Lines */}
            <div className={`h-lines ${horizontalClassName}`}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <div className="h-line" key={i}></div>
                ))}
            </div>
        </div>
    );
}
