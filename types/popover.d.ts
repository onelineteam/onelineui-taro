import { ReactNode } from "react";
import { PositionScroll } from "./position";

export type PopoverPlace = 'r' | 'rt' | 'rb' | 'l' | 'lt' | 'lb' | 't' | 'tl' | 'tr' | 'b' | 'bl' | 'br';
export interface PopoverRect { left: number, top: number, width: number, height: number }
export type PopoverProps = {
  place?: PopoverPlace,
  visible?: boolean,
  rect: PopoverRect,
  scroll?: PositionScroll,
  onClose: () => void;
} & ReactNode
