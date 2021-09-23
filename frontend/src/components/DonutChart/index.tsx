import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSSum } from "types/sale";
import { BASE_URL } from "utils/requests";

type ChartData = {
  labels: string[];
  series: number[];
};

const DonutChart = () => {
  //UseState react - chama varias vezes o componente
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: [],
  });

  //UseEffects react - controla as chamadas do useState
  useEffect(() => {
    //Fazendo requisição
    //axios.get(BASE_URL + '/sales/amount-by-seller')
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
      // convertend os dados para o tipo gráfico
      const data = response.data as SaleSSum[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => x.sum);

      setChartData({ labels: myLabels, series: mySeries });
      //console.log(chartData);
    });
  }, []);

  
  const options = {
    legend: {
      show: true,
    },
  };
  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type="donut"
      height="240"
    />
  );
};

export default DonutChart;
