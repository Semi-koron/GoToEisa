const apikey = process.env.NEXT_PUBLIC_HERE_MAP_API_KEY;

export const showMap = (lat: any, lon: any) => {
  var mapContainer = document.getElementById("mapContainer");
  //子要素がある場合はやめる
  if (mapContainer && mapContainer.children.length > 0) {
    return;
  }
  var platform = new H.service.Platform({
    apikey: apikey,
  });

  // 地図を表示

  var omvService = platform.getOMVService({ path: "v2/vectortiles/core/mc" });

  var baseUrl = "https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/";

  // 日本のデータを表示するためのマップスタイルを設定
  var style = new H.map.Style(`${baseUrl}normal.day.yaml`, baseUrl);

  var omvProvider = new H.service.omv.Provider(omvService, style);
  var omvlayer = new H.map.layer.TileLayer(omvProvider, { max: 22 });
  if (mapContainer) {
    var map = new H.Map(mapContainer, omvlayer, {
      zoom: 8,
      center: { lat: lat, lng: lon },
    });
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var ui = H.ui.UI.createDefault(map, omvlayer);

    return map;
  } else {
    console.error("mapContainer element not found");
  }
};

type pinProps = {
  map: any;
  setX: (x: number) => void;
  setY: (y: number) => void;
};
export const clickAndPin = ({ map, setX, setY }: pinProps) => {
  console.log("clickAndPin");
  let coord: any;
  map?.addEventListener("tap", function (evt: any) {
    console.log("tap");
    coord = map.screenToGeo(
      evt.currentPointer.viewportX,
      evt.currentPointer.viewportY
    );
    if (map.getObjects().length > 0) {
      map.removeObjects(map.getObjects());
    }
    var parisMarker = new H.map.Marker(coord);
    console.log({
      x: coord.lat,
      y: coord.lng,
    });
    map.addObject(parisMarker);
    setX(coord.lat);
    setY(coord.lng);
  });
};

type pinPos = {
  x: number;
  y: number;
};

export const pinPush = (map: any, pinPos: pinPos[]) => {
  for (let i = 0; i < pinPos.length; i++) {
    var parisMarker = new H.map.Marker({ lat: pinPos[i].x, lng: pinPos[i].y });
    map.addObject(parisMarker);
  }
};
