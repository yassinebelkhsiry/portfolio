"use client";

import dynamic from "next/dynamic";
import { lineRadial, scaleLinear } from "d3";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { engineSeries, riskSeries, worldCupSeries } from "@/data/portfolio";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const tooltipStyle = {
  background: "rgba(4,8,18,.92)",
  border: "1px solid rgba(148,163,184,.18)",
  borderRadius: "8px",
  color: "#EAF2FF"
};

export function EngineChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={engineSeries}>
        <defs>
          <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.55} />
            <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
        <XAxis dataKey="cycle" stroke="#91A4C7" tickLine={false} axisLine={false} />
        <YAxis stroke="#91A4C7" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area dataKey="temperature" stroke="#38BDF8" fill="url(#temp)" strokeWidth={2} />
        <Line dataKey="rul" stroke="#FBBF24" strokeWidth={2} dot={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function WorldCupChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={worldCupSeries}>
        <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
        <XAxis dataKey="year" stroke="#91A4C7" tickLine={false} axisLine={false} />
        <YAxis stroke="#91A4C7" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar dataKey="goals" radius={[6, 6, 0, 0]}>
          {worldCupSeries.map((entry) => (
            <Cell key={entry.year} fill={entry.year === "2022" ? "#34D399" : "#38BDF8"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function FraudChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={riskSeries}>
        <CartesianGrid stroke="rgba(148,163,184,.12)" vertical={false} />
        <XAxis dataKey="bucket" stroke="#91A4C7" tickLine={false} axisLine={false} />
        <YAxis stroke="#91A4C7" tickLine={false} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line dataKey="score" stroke="#FBBF24" strokeWidth={3} dot={{ r: 4 }} />
        <Line dataKey="fraud" stroke="#FB7185" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function AnomalyHeatmap() {
  const z = [
    [0.12, 0.16, 0.21, 0.28, 0.39, 0.57, 0.74],
    [0.08, 0.11, 0.15, 0.22, 0.36, 0.51, 0.69],
    [0.05, 0.09, 0.13, 0.18, 0.29, 0.43, 0.62],
    [0.03, 0.06, 0.08, 0.14, 0.24, 0.39, 0.58]
  ];

  return (
    <Plot
      data={[
        {
          z,
          x: ["20", "45", "70", "95", "120", "145", "170"],
          y: ["Temp.", "Pression", "Vibration", "Débit"],
          type: "heatmap",
          colorscale: [
            [0, "#07111F"],
            [0.45, "#38BDF8"],
            [1, "#FB7185"]
          ],
          showscale: false
        }
      ]}
      layout={{
        height: 230,
        margin: { l: 68, r: 10, t: 10, b: 38 },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        font: { color: "#91A4C7", size: 11 },
        xaxis: { gridcolor: "rgba(148,163,184,.1)" },
        yaxis: { gridcolor: "rgba(148,163,184,.1)" }
      }}
      config={{ displayModeBar: false, responsive: true }}
      className="w-full"
    />
  );
}

export function D3SensorRadar() {
  const metrics = [
    { label: "Temp.", value: 82 },
    { label: "Vibration", value: 74 },
    { label: "Pression", value: 61 },
    { label: "Débit", value: 68 },
    { label: "RUL", value: 46 },
    { label: "Stabilité", value: 77 }
  ];
  const radius = 78;
  const angle = (Math.PI * 2) / metrics.length;
  const radialScale = scaleLinear().domain([0, 100]).range([18, radius]);
  const radarLine = lineRadial<{ label: string; value: number }>()
    .angle((_, index) => index * angle)
    .radius((point) => radialScale(point.value));
  const path = radarLine([...metrics, metrics[0]]) ?? "";

  return (
    <svg viewBox="-110 -110 220 220" className="h-[220px] w-full">
      {[25, 50, 75, 100].map((level) => (
        <circle
          key={level}
          r={radialScale(level)}
          fill="none"
          stroke="rgba(148,163,184,.16)"
          strokeWidth="1"
        />
      ))}
      {metrics.map((metric, index) => {
        const x = Math.sin(index * angle) * 96;
        const y = -Math.cos(index * angle) * 96;
        return (
          <g key={metric.label}>
            <line
              x1="0"
              y1="0"
              x2={Math.sin(index * angle) * radius}
              y2={-Math.cos(index * angle) * radius}
              stroke="rgba(148,163,184,.16)"
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#91A4C7"
              fontSize="10"
            >
              {metric.label}
            </text>
          </g>
        );
      })}
      <path d={path} fill="rgba(56,189,248,.20)" stroke="#38BDF8" strokeWidth="2" />
      <circle r="3" fill="#67E8F9" />
    </svg>
  );
}
