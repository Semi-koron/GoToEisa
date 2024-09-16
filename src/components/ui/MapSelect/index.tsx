import React from "react";
import style from "./index.module.css";
import clsx from "clsx";
import { Button } from "../Button";
import Modal from "react-modal";

type GoogleMapSelectProp = {
  children: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const MapSelect: React.FC<GoogleMapSelectProp> = ({
  children,
}: GoogleMapSelectProp) => {
  return <>{children}</>;
};
