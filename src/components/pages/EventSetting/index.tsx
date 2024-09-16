import React, { use, useEffect, useState } from "react";
import H from "@here/maps-api-for-javascript";
import "@here/maps-api-for-javascript/bin/mapsjs-ui.css";
import { clickAndPin, showMap } from "@/lib/here";

export const EventSetting: React.FC = () => {
  const [map, setMap] = useState<H.Map | null>(null);
  useEffect(() => {
    const data = showMap(26.2124, 127.6809);
    if (data) {
      setMap(data);
    }
  }, []);

  useEffect(() => {
    if (map) {
      console.log("map is ready");
      clickAndPin(map);
    }
  }, [map]);

  return (
    <>
      <div id="mapContainer"></div>
      <script id="mapScript"></script>
    </>
  );
};
