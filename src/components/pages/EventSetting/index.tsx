import style from "./index.module.css";
import React, { use, useEffect, useState } from "react";
import H from "@here/maps-api-for-javascript";
import "@here/maps-api-for-javascript/bin/mapsjs-ui.css";
import { clickAndPin, showMap } from "@/lib/here";
import { ReturnButton } from "@/components/ui/ReturnButton";
import clsx from "clsx";
import { TimeInput } from "@/components/ui/TimeSet";
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";

export const EventSetting: React.FC = () => {
  const [map, setMap] = useState<H.Map | null>(null);
  const [posX, setPosX] = useState<number | null>(null);
  const [posY, setPosY] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [eventName, setEventName] = useState<string | null>(null);
  const [eventDescription, setEventDescription] = useState<string | null>(null);
  useEffect(() => {
    const data = showMap(26.2124, 127.6809);
    if (data) {
      setMap(data);
    }
  }, []);

  useEffect(() => {
    if (map) {
      console.log("map is ready");
      clickAndPin({ map, setX: setPosX, setY: setPosY });
    }
  }, [map]);

  return (
    <>
      <div id="mapContainer"></div>
      <script id="mapScript"></script>
      <ReturnButton />
      {posX && posY ? (
        <h1 className={clsx(style["event-setting-wrapper"])}>
          <div className={clsx(style["window-style"])}>
            <div className={clsx(style["input-wrapper"])}>
              <TextInput setValue={setEventName}>イベント名</TextInput>
              <TimeInput setValue={setStartTime}>開催日時</TimeInput>
              <TimeInput setValue={setEndTime}>終了日時</TimeInput>
              <TextInput setValue={setEventDescription}>
                イベントの説明
              </TextInput>
            </div>
            <Button buttonShape="ends-round">イベントを作成</Button>
          </div>
        </h1>
      ) : null}
    </>
  );
};
