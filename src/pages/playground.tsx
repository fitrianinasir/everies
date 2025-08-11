import { Button } from "@/components/ui/button";
import React from "react";

const Playground = () => {
  return (
    <div className="flex p-10 flex-row gap-5">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export default Playground;
