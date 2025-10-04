import { TProduct, TVariationByColor, TVariationBySize } from "@/lib/model";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { VariationColor, VariationSize } from "./Variation";
import { Button } from "../ui/button";

type PopupProductProps = {
  variationByColor: TVariationByColor[];
  variationBySize: TVariationBySize[];
};

const PopupProduct = ({
  variationBySize,
  variationByColor,
}: PopupProductProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button asSelector variant="secondary" size="sm">
          Variant: White | L
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <VariationColor variation={variationByColor} />
        <VariationSize variation={variationBySize} />
      </PopoverContent>
    </Popover>
  );
};
export default PopupProduct;
