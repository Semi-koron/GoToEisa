import style from "./index.module.css";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import H from "@here/maps-api-for-javascript";
import "@here/maps-api-for-javascript/bin/mapsjs-ui.css";
import { clickAndPin, pinPush, showMap } from "@/lib/here";
import { ReturnButton } from "@/components/ui/ReturnButton";
import clsx from "clsx";
import { TimeInput } from "@/components/ui/TimeSet";
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";

export const EventJoin: React.FC = () => {
  const router = useRouter();
  const [map, setMap] = useState<H.Map | null>(null);
  useEffect(() => {
    const data = showMap(26.2124, 127.6809);
    if (data) {
      setMap(data);
    }
  }, []);
  type pinPos = {
    x: number;
    y: number;
  };

  const testPin: pinPos[] = [
    { x: 26.356397542250086, y: 127.80232779305577 },
    { x: 26.20072727754113, y: 127.69651213284736 },
    { x: 26.61180685765684, y: 127.96394245322948 },
    { x: 26.3999762096246, y: 127.7543349014238 },
  ];
  useEffect(() => {
    if (map) {
      console.log("map is ready");
      pinPush(map, testPin);
    }
  }, [map]);

  return (
    <>
      <div id="mapContainer"></div>
      <script id="mapScript"></script>
      <ReturnButton />
    </>
  );
};
