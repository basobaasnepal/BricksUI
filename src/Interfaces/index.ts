import { ReactChild } from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  type?: "primary" | "danger" | "warning" | "success" | "default" | "dashed";
  className?: string;
  size?: "large" | "small" | "medium";
  shape?: "circle" | "round";
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  href?: string;
  disabled?: boolean;
  block?: boolean;
  style?: React.CSSProperties;
}
export interface TooltipProps {
  children: React.ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topRight"
    | "topLeft"
    | "bottomRight"
    | "bottomLeft"
    | "rightTop"
    | "rightBottom"
    | "leftTop"
    | "leftBottom";
  text: string;
}
export interface MainLayouts {
  children?: React.ReactNode;
}
export interface DropdownProps {
  children?: React.ReactNode;
  overlay: React.ReactNode;
  overlayClass?: string;
  trigger?: "hover" | "click";
  placement?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "top"
    | "topLeft"
    | "topRight";
}
export interface MenuProps {
  children?: React.ReactNode;
}
export interface MenuItemsProps {
  children?: React.ReactNode;
  menuClass?: string;
  disabled?: boolean;
}
export interface Paragraph {
  children: ReactChild;
  type?:
    | "meta"
    | "oversized"
    | "long"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  align?: "left" | "right" | "center" | "justify";
  textstyle?: "normal" | "italic" | "oblique";
  weight?:
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "normal"
    | "bold"
    | "bolder"
    | "lighter";
  color?: string;
  size?: string;
  className?: string;
}
export interface Hyperlink {
  children: string;
  url?: string;
}
export interface InputProps {
  prefix?: React.ReactNode;
  size?: "small" | "default" | "large";
  type?: "text" | "password" | "email" | "number";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  suffix?: React.ReactNode;
  postTab?: React.ReactNode;
  preTab?: React.ReactNode;
  placeholder?: string;
  value?: string | number | string[];
  id?: string;
  visibilityToggle?: boolean;
  name?: string;
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
  className?: string;
}
export interface SearchProps {
  button?: "icon" | "block";
  size?: "small" | "default" | "large";
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  id?: string;
  value?: string | number;
  name?: string;
  searchBtn?: React.ReactNode;
}

export interface TextAreaProps {
  placeholder?: string;
  row?: number;
  cols?: number;
  className?: string;
}
