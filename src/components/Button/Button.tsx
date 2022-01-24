import React from "react";

export type ButtonType = "basic" | "core" | "special" | "danger" | "warning";
export type ButtonHtmlType = "button" | "submit" | "reset";
export type ButtonSizeType = "tiny" | "small" | "normal" | "large" | "xlarge";

export interface ButtonProps {
  children?: React.ReactNode;
  htmlType?: ButtonHtmlType;
  type?: ButtonType;
  size?: ButtonSizeType;
  block?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      htmlType = "button",
      type = "basic",
      size = "normal",
      block,
      ghost,
      disabled,
      loading,
      onClick,
      className = "",
      style,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        e.preventDefault();
        return;
      }

      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={htmlType}
        style={style}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        버튼
      </button>
    );
  }
);
