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
    return map;
  } else {
    console.error("mapContainer element not found");
  }
};

export const clickAndPin = (map: any) => {
  // Attach an event listener to map display
  // obtain the coordinates and display in an alert box.
  map.addEventListener("tap", function (evt: any) {
    console.log("tap");
    var coord = map.screenToGeo(
      evt.currentPointer.viewportX,
      evt.currentPointer.viewportY
    );
    if (coord) {
      var marker = new H.map.Marker(coord);
      map.addObject;
    }
  });
};
