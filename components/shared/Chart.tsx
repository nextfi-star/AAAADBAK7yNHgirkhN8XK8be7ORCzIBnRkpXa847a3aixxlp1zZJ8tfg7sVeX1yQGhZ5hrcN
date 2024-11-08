"use client";
import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-01", deposit: 222, withdraw: 150, swap: 320 },
  { date: "2024-04-02", deposit: 97, withdraw: 180, swap: 121 },
  { date: "2024-04-03", deposit: 167, withdraw: 120, swap: 367 },
  { date: "2024-04-04", deposit: 242, withdraw: 260, swap: 272 },
  { date: "2024-04-05", deposit: 373, withdraw: 290, swap: 410 },
  { date: "2024-04-06", deposit: 301, withdraw: 340, swap: 97 },
  { date: "2024-04-07", deposit: 245, withdraw: 180, swap: 155 },
  { date: "2024-04-08", deposit: 409, withdraw: 320, swap: 445 },
  { date: "2024-04-09", deposit: 59, withdraw: 110, swap: 80 },
  { date: "2024-04-10", deposit: 261, withdraw: 190, swap: 210 },
  { date: "2024-04-11", deposit: 327, withdraw: 350, swap: 301 },
  { date: "2024-04-12", deposit: 292, withdraw: 210, swap: 381 },
  { date: "2024-04-13", deposit: 342, withdraw: 380, swap: 134 },
  { date: "2024-04-14", deposit: 137, withdraw: 220, swap: 203 },
  { date: "2024-04-15", deposit: 120, withdraw: 170, swap: 399 },
  { date: "2024-04-16", deposit: 138, withdraw: 190, swap: 109 },
  { date: "2024-04-17", deposit: 446, withdraw: 360, swap: 423 },
  { date: "2024-04-18", deposit: 364, withdraw: 410, swap: 285 },
  { date: "2024-04-19", deposit: 243, withdraw: 180, swap: 193 },
  { date: "2024-04-20", deposit: 89, withdraw: 150, swap: 121 },
  { date: "2024-04-21", deposit: 137, withdraw: 200, swap: 275 },
  { date: "2024-04-22", deposit: 224, withdraw: 170, swap: 365 },
  { date: "2024-04-23", deposit: 138, withdraw: 230, swap: 91 },
  { date: "2024-04-24", deposit: 387, withdraw: 290, swap: 323 },
  { date: "2024-04-25", deposit: 215, withdraw: 250, swap: 183 },
  { date: "2024-04-26", deposit: 75, withdraw: 130, swap: 402 },
  { date: "2024-04-27", deposit: 383, withdraw: 420, swap: 95 },
  { date: "2024-04-28", deposit: 122, withdraw: 180, swap: 307 },
  { date: "2024-04-29", deposit: 315, withdraw: 240, swap: 217 },
  { date: "2024-04-30", deposit: 454, withdraw: 380, swap: 111 },
];

const chartConfig = {
  deposit: {
    label: "Deposit",
    color: "hsl(220 70% 50%)",
  },
  withdraw: {
    label: "Withdraw",
    color: "hsl(220 70% 50%)",
  },
  swap: {
    label: "Swap",
    color: "hsl(220 70% 50%)",
  },
};

type ChartKey = keyof typeof chartConfig;

export default function Chart() {
  const [activeChart, setActiveChart] = React.useState<ChartKey>("deposit");

  const total = React.useMemo(
    () => ({
      deposit: chartData.reduce((acc, curr) => acc + curr.deposit, 0),
      withdraw: chartData.reduce((acc, curr) => acc + curr.withdraw, 0),
      swap: chartData.reduce((acc, curr) => acc + curr.swap, 0),
    }),
    [],
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle className='text-[20px] 2xl:text-[32px]'>NextFi Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total income for the last 30 days
          </CardDescription>
        </div>
        <div className="flex">
          {(Object.keys(chartConfig) as ChartKey[]).map((key) => (
            <button
              key={key}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              data-active={activeChart === key}
              onClick={() => setActiveChart(key)}
            >
              <span className="text-xs text-muted-foreground">
                {chartConfig[key].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          className="aspect-auto h-[250px] w-full"
          config={chartConfig}
        >
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="date"
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);

                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
              tickLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={chartConfig[activeChart].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
