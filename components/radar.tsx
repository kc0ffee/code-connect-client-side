import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

export const ResultRadarChart = (props: ResultRadarChartProps) => {
  const data = [
    {
      title: "Line",
      score: props.line_count,
      fullMark: 2,
    },
    {
      title: "Token count",
      score: props.token_count,
      fullMark: 2,
    },
    {
      title: "Token length",
      score: props.token_length,
      fullMark: 2,
    },
    {
      title: "Function Length",
      score: props.function_len,
      fullMark: 2,
    },
  ];
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={500}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey={"title"} />
      <PolarRadiusAxis />
      <Radar
        name="Score"
        dataKey={"score"}
        stroke="#8884d8"
        fill="#add8e6"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};
