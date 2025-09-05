import GeneratedStars from "@/lib/generateStars";
import React from "react";

const ReviewDetail = () => {
  return (
    <div className="text-2xs flex flex-col gap-2 my-3 max-w-11/12">
      <div className="flex flex-row gap-1 font-semibold items-center">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="/images/profile/profile.png"
          alt="Rounded avatar"
        />
        <div className="">
          <div className="flex flex-row gap-1 items-center">
            <span>fitrianinsrr</span>
            <GeneratedStars stars={4.5} size="small" />
          </div>
          <span>2025-09-05 10:22:12 | Variasi: Hitam</span>
        </div>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum tempora
        similique, magnam nulla ex odit voluptatem! Voluptatum dicta voluptate
        amet iste. Vel deserunt sunt animi ducimus, sed numquam corporis
        distinctio.
      </span>
      <div className="flex flex-row gap-2">
        {Array.from({ length: 4 }, (_, index) => (
          <img
            src="/images/products/blouse3.webp"
            className="w-16 h-16 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewDetail;
