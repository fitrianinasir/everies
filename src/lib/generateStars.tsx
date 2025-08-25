import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { cn } from "./utils";
import React from "react";

export interface GeneratedStarsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  stars: number;
  size?: "small" | "default" | "large";
}

const GeneratedStars = React.forwardRef<HTMLDivElement, GeneratedStarsProps>(
  ({ className, size = "default", stars = 0, ...props }, ref) => {
    const sizeClasses: { [key: string]: string } = {
      small: "text-xs",
      default: "text-sm",
      large: "text-lg",
    };
    return (
      <div>
        <div>
          {stars % 1 === 0 ? (
            <div className="flex flex-row items-center">
              {Array.from({ length: stars }, (_, index) => (
                <FaStar
                  key={index}
                  className={cn(
                    "text-yellow-400",
                    sizeClasses[size],
                    className
                  )}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-row items-center">
              {Array.from({ length: Math.floor(stars) }, (_, index) => (
                <FaStar
                  key={index}
                  className={cn(
                    "text-yellow-400",
                    sizeClasses[size],
                    className
                  )}
                />
              ))}
              <FaRegStarHalfStroke
                className={cn("text-yellow-400", sizeClasses[size], className)}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default GeneratedStars;
