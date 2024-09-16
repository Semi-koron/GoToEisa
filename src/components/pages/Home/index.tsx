import React from "react";
import style from "./index.module.css";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/lib/firebase";
import FestivalIcon from "@mui/icons-material/Festival";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

export const Home: React.FC = () => {
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
        <h1>Home</h1>
      </div>
      <div className={clsx(style["button-wrapper"])}>
        <Link href="/open_eisa">
          <Button buttonShape="ends-round">
            エイサーを開催する
            <FestivalIcon />
          </Button>
        </Link>
        <Link href="/join_eisa">
          <Button buttonShape="ends-round">
            エイサーに参加する
            <LoginIcon />
          </Button>
        </Link>
      </div>
    </>
  );
};
