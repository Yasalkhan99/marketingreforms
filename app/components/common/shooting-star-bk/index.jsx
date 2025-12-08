
"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export function ShootingStarsBackground({ starCount }) {
    return (
        <div
            className="h-full w-full rounded-md bg-[#1F1D28] flex flex-col items-center justify-center relative w-full">
            <ShootingStars starsCount={starCount} />
            <StarsBackground />
        </div>
    );
}
