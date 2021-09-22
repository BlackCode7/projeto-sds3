import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';


type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    //Fazendo requisição
    //axios.get(BASE_URL + '/sales/amount-by-seller')
    axios.get(`${ BASE_URL }/sales/amount-by-seller`)
    .then(response => {
        // convertend os dados para o tipo gráfico
        const data = response.data as SaleSSum[];
        const myLabels = data.map( x => x.sellerName);
        const mySeries = data.map( x => x.sum);

        chartData = { labels: myLabels, series: mySeries };
        console.log(chartData);
    });

    // FORMA ERRADA
    let chartData : ChartData = { labels: [], series: []};

    /*
    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    */
    
    const options = {
        legend: {
            show: true
        }
    }
  return (
    <Chart 
        options={{ ...options, labels: chartData.labels }}
        series={chartData.series}
        type="donut"
        height="240"
    />
  );
}

export default DonutChart;