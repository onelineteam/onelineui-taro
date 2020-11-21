export type PositionPlace = 'l' | 'r' | 't' | 'b' | 'f' | 'c';
export interface PositionScroll { scrollWidth: number, scrollHeight: number, scrollTop: number, scrollLeft: number }
export type PositionProps = {
  place?: PositionPlace,
  children?: any,
  mask?: boolean,
  visible?: boolean,
  contentStyle?: any,
  animate?: string,
  onClose: () => void,
  onRect?: (value: any) => void,
  // scroll?: PositionScroll

}