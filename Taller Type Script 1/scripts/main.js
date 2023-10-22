import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("tabla");
var averageTp = document.getElementById("average");
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                             <td>").concat(c.name, "</td>\n                             <td>").concat(c.platform, "</td>\n                             <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
renderSeriesInTable(dataSeries);
function averageSeason(series) {
    var totalSeasons = 0;
    var cont = 0;
    series.forEach(function (serie) {totalSeasons = totalSeasons + serie.seasons; cont+=1 });
    return totalSeasons/cont;
}
averageTp.innerHTML = "".concat(averageSeason(dataSeries));
