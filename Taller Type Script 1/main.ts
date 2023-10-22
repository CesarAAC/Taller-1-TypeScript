import {Serie} from "./Serie.js"

import {dataSeries} from "./dataSeries.js"

const seriesTbody: HTMLElement= document.getElementById("tabla")!;
const averageTp:HTMLElement= document.getElementById("average")!;

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${c.id}</td>
                             <td>${c.name}</td>
                             <td>${c.platform}</td>
                             <td>${c.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
  }
  renderSeriesInTable(dataSeries)

  function averageSeason(series: Serie[]): number {
    let totalSeasons: number= 0;
    let cont: number= 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons, cont+=1);
    let averageSeasons: number =totalSeasons/cont;
    return averageSeasons;
  }
  averageTp.innerHTML = `${averageSeason(dataSeries)}`;