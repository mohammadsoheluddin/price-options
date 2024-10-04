import {
  LineChart as LChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "John", math: 48, physics: 91, chemistry: 69 },
    { id: 2, name: "Emma", math: 67, physics: 45, chemistry: 92 },
    { id: 3, name: "Sophia", math: 95, physics: 93, chemistry: 49 },
    { id: 4, name: "Liam", math: 42, physics: 68, chemistry: 91 },
    { id: 5, name: "Noah", math: 68, physics: 48, chemistry: 94 },
    { id: 6, name: "Olivia", math: 94, physics: 47, chemistry: 95 },
    { id: 7, name: "James", math: 49, physics: 69, chemistry: 93 },
    { id: 8, name: "Mia", math: 91, physics: 67, chemistry: 47 },
    { id: 9, name: "Isabella", math: 92, physics: 46, chemistry: 68 },
    { id: 10, name: "Lucas", math: 43, physics: 93, chemistry: 92 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarks}>
        <Line type="monotone" dataKey="math" stroke="red" />
        <Line type="monotone" dataKey="physics" stroke="green" />
        <Line type="monotone" dataKey="chemistry" stroke="blue" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LChart>
    </div>
  );
};

export default LineChart;
