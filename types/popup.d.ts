export type PopupProps = {
  place: 'r' | 'l' | 't' | 'b',
  children?: any,
  mask?: boolean,
  offset?: number,
  visible?: boolean,
  title?: string,
  showClose?: boolean,
  size?: number | string,
  hand?: boolean,
  onClose: () => void;
}