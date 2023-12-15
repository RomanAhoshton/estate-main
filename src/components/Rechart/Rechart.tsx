import { useEffect, useState } from "react";
import { useWidth } from "../../hooks/useWidth";
import styles from "./index.module.scss";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const CustomTooltip = () => {
  return (
    <div className={styles.customTooltip}>
      <span>BALANCE</span>
      <span>$35.00</span>
    </div>
  );
};

const Rechart = () => {
  const [chartWidth, setChartWidth] = useState(0);

  const { width } = useWidth();
  const data = [
    {
      name: "01",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "02",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "03",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "04",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "05",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "06",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  useEffect(() => {
    if (width > 868) {
      setChartWidth(540);
    } else if (width > 600 && width < 868) {
      setChartWidth(400);
    } else {
      setChartWidth(350);
    }
  }, [width]);

  return (
    <ResponsiveContainer width={chartWidth} height={width > 868 ? 450 : 350}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="uv" stroke="#1daeff" fill="#1daeff" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
