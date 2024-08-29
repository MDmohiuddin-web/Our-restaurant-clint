import React from "react";
import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
// Adjust the path as needed
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const AdminHome = () => {
  const { user } = UseAuth();

  const axiosSecure = UseAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-status");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["orders-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders-status");
      return res.data;
    },
  });

  // custom shape for the bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const MyXAxis = ({ dataKey, label, ...rest }) => {
    return <XAxis dataKey={dataKey} label={label} {...rest} />;
  };

  // custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className="h-svh p-10">
      <div>
        {/* <img
          className="rounded-lg h-96"
          defaultValue={user?.photoURL}
          src={user?.photoURL}
        /> */}

        <h2 className="text-3xl my-5">
          <span>Hi, Welcome </span>
          {user?.displayName ? user.displayName : "Back"}
        </h2>
      </div>
      {/* status */}
      <div className="stats ">
        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
            <FaWallet></FaWallet>
          </div>
          <div className="stat-title">revenue</div>
          <div className="stat-value">{stats?.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
            <FaUsers />
          </div>
          <div className="stat-title"> Customers</div>
          <div className="stat-value">{stats?.user}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
            <SiCodechef />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
            <FaTruck />
          </div>
          <div className="stat-title">orders</div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>

      {/* chart */}
      <div className="md:flex ">
        <div className="w-1/2">
          <BarChart
            width={500} height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <MyXAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
            <Tooltip />
          </BarChart>
        </div>

        {/* chart rounded*/}
        <div className="w-1/2 ">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
