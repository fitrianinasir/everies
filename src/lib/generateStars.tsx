import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { cn } from "./utils";
import React from "react";

export interface GeneratedStarsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  stars: number;
}

const GeneratedStars = React.forwardRef<HTMLDivElement, GeneratedStarsProps>(
  ({ className, stars = 0, ...props }, ref) => {
    return (
      <div>
        <div>
          {stars % 1 === 0 ? (
            <div className="flex flex-row items-center">
              {Array.from({ length: stars }, (_, index) => (
                <FaStar
                  key={index}
                  className={cn("text-2xs text-yellow-400", className)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-row items-center">
              {Array.from({ length: Math.floor(stars) }, (_, index) => (
                <FaStar
                  key={index}
                  className={cn("text-2xs text-yellow-400", className)}
                />
              ))}
              <FaRegStarHalfStroke
                className={cn("text-2xs text-yellow-400", className)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default GeneratedStars;
