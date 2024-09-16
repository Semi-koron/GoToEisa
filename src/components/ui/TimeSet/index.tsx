import React from "react";
import style from "./index.module.css";
import clsx from "clsx";

type TextInputProps = {
  children: React.ReactNode;
  isIncorrect?: boolean;
  setValue: (Date: Date) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TimeInput: React.FC<TextInputProps> = ({
  children,
  isIncorrect,
  setValue,
  ...props
}) => {
  return (
    <>
      <div>
        <h2 className={clsx(style["heading-style"])}>{children}</h2>
        <span
          className={clsx(style["input-wrapper"])}
          data-incorrect={isIncorrect}
        >
          <input
            className={clsx(style["input-style"])}
            type="datetime-local"
            onChange={(e) => setValue(new Date(e.target.value))}
            {...props}
          />
        </span>
      </div>
    </>
  );
};
