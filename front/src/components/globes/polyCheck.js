import data from "./data.json";
function inside(point1, point2) {
  var point = [point2, point1];
  var city = [];
  data.features.forEach((feature) => {
    var is_in = false;
    var polygon = feature.geometry.coordinates;
    if (polygon.length < 2 || feature.properties.ADMIN === "South Africa") {
      polygon.map((newPolygon) => {
        if (feature.properties.ADMIN === "South Africa") {
          // newPolygon = newPolygon[1];
        }
        var n = newPolygon?.length,
          x = point[0],
          y = point[1],
          x1,
          x2,
          y1,
          y2;
        for (var i = 0; i < n - 1; ++i) {
          x1 = newPolygon[i][0];
          x2 = newPolygon[i + 1][0];
          y1 = newPolygon[i][1];
          y2 = newPolygon[i + 1][1];
          if (y < y1 != y < y2 && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) {
            is_in = !is_in;
          }
        }
        if (is_in) {
          if (feature.properties.ADMIN === "South Africa") {
            city.push(feature);
            return;
          }
          city.splice(0, city.length);
          city.push(feature);
        }
      });
    } else {
      polygon.map((newPolygon, index) => {
        if (Array.isArray(newPolygon)) {
          newPolygon = newPolygon[0];
        }

        var n = newPolygon?.length,
          x = point[0],
          y = point[1],
          x1,
          x2,
          y1,
          y2;
        for (var i = 0; i < n - 1; ++i) {
          x1 = newPolygon[i][0];
          x2 = newPolygon[i + 1][0];
          y1 = newPolygon[i][1];
          y2 = newPolygon[i + 1][1];
          if (y < y1 != y < y2 && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1) {
            is_in = !is_in;
          }
        }
        if (is_in) {
          city.splice(0, city.length);
          city.push(feature);
        }
      });
    }
  });
  return city[0];
}

export default inside;
