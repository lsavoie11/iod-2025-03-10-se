fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Process data for the charts
    const categoryCounts = {};
    data.forEach((product) => {
      categoryCounts[product.category] =
        (categoryCounts[product.category] || 0) + 1;
    });

    const categories = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);

    // Bar chart configuration
    const barOptions = {
      title: { text: "Product Categories (Bar Chart)", left: "center" },
      xAxis: { type: "category", data: categories },
      yAxis: { type: "value" },
      series: [
        {
          name: "# Products",
          type: "bar",
          data: counts,
        },
      ],
    };

    // Pie chart configuration
    const pieOptions = {
      title: { text: "Product Categories (Pie Chart)", left: "center" },
      tooltip: { trigger: "item" },
      series: [
        {
          name: "Categories",
          type: "pie",
          radius: "50%",
          data: categories.map((category, index) => ({
            value: counts[index],
            name: category,
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    // Line chart configuration
    const lineOptions = {
      title: { text: "Product Categories (Line Chart)", left: "center" },
      xAxis: { type: "category", data: categories },
      yAxis: { type: "value" },
      series: [
        {
          name: "# Products",
          type: "line",
          data: counts,
        },
      ],
    };

    // Initialize and set options for the bar chart
    const barChart = echarts.init(document.getElementById("main"));
    barChart.setOption(barOptions);

    // Initialize and set options for the pie chart
    const pieChart = echarts.init(document.getElementById("pie"));
    pieChart.setOption(pieOptions);

    // Initialize and set options for the line chart
    const lineChart = echarts.init(document.getElementById("line"));
    lineChart.setOption(lineOptions);
  })
  .catch((error) => console.error("Error fetching data:", error));
