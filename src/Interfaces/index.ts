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
  value?: string;
  placeholder?: string;
  inputClassName?: string;
}
export interface SearchProps {
  button?: "icon" | "block";
  size?: "small" | "default" | "large";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface OptionListItems {
  label: string;
  value: string;
}
export interface SelectProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  list?: Array<OptionListItems>;
  options: Array<OptionListItems>;
  name?: string;
  onChange: (event: object) => void;
  multiple?: boolean;
  disapper?: boolean;
  size?: "large" | "small" | "default";
  placeholder?: string;
  search?: boolean;
  selectClassName?: string;
}
export interface OptionProps {
  children?: React.ReactNode;
  list: Array<OptionListItems>;
  clickHandler: (value: object) => void;
  value?: string;
  disappear?: boolean;
  optionClassName?: string;
}
export interface MultipleSelect {
  children?: React.ReactNode;
  list: Array<OptionListItems>;
  clickHandler: (value: object) => void;
  value: Array<string>;
  disappear?: boolean;
  selectClassName?: string;
}
export interface SelectInput {
  prefix?: React.ReactNode;
  size?: "small" | "default" | "large";
  type?: "text" | "password" | "email" | "number";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  suffix?: React.ReactNode;
  postTab?: React.ReactNode;
  preTab?: React.ReactNode;
  value: Array<string>;
  displayPlaceholder?: boolean;
  setDisplayPlaceholder?: (value: boolean) => void;
  closeHandler: (value: string) => void;
  placeholder?: string;
  selectClassName?: string;
  search?: boolean;
}
