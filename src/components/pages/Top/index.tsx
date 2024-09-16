import React from "react";
import style from "./index.module.css";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase";

export const Top: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        router.push("/home");
      })
      .catch((error) => {
        console.error(error);
        alert("ログインに失敗しました");
      });
  };
  return (
    <>
      <div className={clsx(style["title-wrapper"])}>
        <h1>Go To Eisa</h1>
        <p>~ エイサーを見る、エイサーを開催する。 ~</p>
      </div>
      <div className={clsx(style["button-wrapper"])}>
        <Button buttonShape="square" onClick={handleClick}>
          LogIn with Google
        </Button>
      </div>
    </>
  );
};
