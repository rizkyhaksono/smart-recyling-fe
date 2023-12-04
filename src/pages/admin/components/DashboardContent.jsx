import { Card } from "antd";
import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DashboardContent() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: ["rgba(255, 159, 64, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)"],
          borderColor: ["rgb(255, 159, 64)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)"],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <Card bordered={true}>
        <Chart type="bar" data={chartData} options={chartOptions} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sequi vel numquam nemo officia similique alias veritatis asperiores sit non, minima nostrum natus laudantium eius atque suscipit exercitationem sed repudiandae
          nobis ullam labore corrupti vitae enim. Deleniti fugit similique expedita, explicabo ab necessitatibus quia eius voluptate voluptatem itaque maxime repellendus reiciendis minus dolorum. Sapiente tenetur molestiae magnam natus
          harum repellendus sint sunt omnis provident, repellat voluptatum ducimus eos delectus quas nemo eius totam. Similique voluptas quaerat maxime neque odio laudantium, qui voluptate vero eligendi nesciunt maiores dolores quis fugit,
          quos excepturi corrupti pariatur debitis iusto sint. Vitae asperiores veniam veritatis.
        </p>
      </Card>
    </>
  );
}
