"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", Restaurants: 222, mobile: 150 },
  { date: "2024-04-02", Restaurants: 97, mobile: 180 },
  { date: "2024-04-03", Restaurants: 167, mobile: 120 },
  { date: "2024-04-04", Restaurants: 242, mobile: 260 },
  { date: "2024-04-05", Restaurants: 373, mobile: 290 },
  { date: "2024-04-06", Restaurants: 301, mobile: 340 },
  { date: "2024-04-07", Restaurants: 245, mobile: 180 },
  { date: "2024-04-08", Restaurants: 409, mobile: 320 },
  { date: "2024-04-09", Restaurants: 59, mobile: 110 },
  { date: "2024-04-10", Restaurants: 261, mobile: 190 },
  { date: "2024-04-11", Restaurants: 327, mobile: 350 },
  { date: "2024-04-12", Restaurants: 292, mobile: 210 },
  { date: "2024-04-13", Restaurants: 342, mobile: 380 },
  { date: "2024-04-14", Restaurants: 137, mobile: 220 },
  { date: "2024-04-15", Restaurants: 120, mobile: 170 },
  { date: "2024-04-16", Restaurants: 138, mobile: 190 },
  { date: "2024-04-17", Restaurants: 446, mobile: 360 },
  { date: "2024-04-18", Restaurants: 364, mobile: 410 },
  { date: "2024-04-19", Restaurants: 243, mobile: 180 },
  { date: "2024-04-20", Restaurants: 89, mobile: 150 },
  { date: "2024-04-21", Restaurants: 137, mobile: 200 },
  { date: "2024-04-22", Restaurants: 224, mobile: 170 },
  { date: "2024-04-23", Restaurants: 138, mobile: 230 },
  { date: "2024-04-24", Restaurants: 387, mobile: 290 },
  { date: "2024-04-25", Restaurants: 215, mobile: 250 },
  { date: "2024-04-26", Restaurants: 75, mobile: 130 },
  { date: "2024-04-27", Restaurants: 383, mobile: 420 },
  { date: "2024-04-28", Restaurants: 122, mobile: 180 },
  { date: "2024-04-29", Restaurants: 315, mobile: 240 },
  { date: "2024-04-30", Restaurants: 454, mobile: 380 },
  { date: "2024-05-01", Restaurants: 165, mobile: 220 },
  { date: "2024-05-02", Restaurants: 293, mobile: 310 },
  { date: "2024-05-03", Restaurants: 247, mobile: 190 },
  { date: "2024-05-04", Restaurants: 385, mobile: 420 },
  { date: "2024-05-05", Restaurants: 481, mobile: 390 },
  { date: "2024-05-06", Restaurants: 498, mobile: 520 },
  { date: "2024-05-07", Restaurants: 388, mobile: 300 },
  { date: "2024-05-08", Restaurants: 149, mobile: 210 },
  { date: "2024-05-09", Restaurants: 227, mobile: 180 },
  { date: "2024-05-10", Restaurants: 293, mobile: 330 },
  { date: "2024-05-11", Restaurants: 335, mobile: 270 },
  { date: "2024-05-12", Restaurants: 197, mobile: 240 },
  { date: "2024-05-13", Restaurants: 197, mobile: 160 },
  { date: "2024-05-14", Restaurants: 448, mobile: 490 },
  { date: "2024-05-15", Restaurants: 473, mobile: 380 },
  { date: "2024-05-16", Restaurants: 338, mobile: 400 },
  { date: "2024-05-17", Restaurants: 499, mobile: 420 },
  { date: "2024-05-18", Restaurants: 315, mobile: 350 },
  { date: "2024-05-19", Restaurants: 235, mobile: 180 },
  { date: "2024-05-20", Restaurants: 177, mobile: 230 },
  { date: "2024-05-21", Restaurants: 82, mobile: 140 },
  { date: "2024-05-22", Restaurants: 81, mobile: 120 },
  { date: "2024-05-23", Restaurants: 252, mobile: 290 },
  { date: "2024-05-24", Restaurants: 294, mobile: 220 },
  { date: "2024-05-25", Restaurants: 201, mobile: 250 },
  { date: "2024-05-26", Restaurants: 213, mobile: 170 },
  { date: "2024-05-27", Restaurants: 420, mobile: 460 },
  { date: "2024-05-28", Restaurants: 233, mobile: 190 },
  { date: "2024-05-29", Restaurants: 78, mobile: 130 },
  { date: "2024-05-30", Restaurants: 340, mobile: 280 },
  { date: "2024-05-31", Restaurants: 178, mobile: 230 },
  { date: "2024-06-01", Restaurants: 178, mobile: 200 },
  { date: "2024-06-02", Restaurants: 470, mobile: 410 },
  { date: "2024-06-03", Restaurants: 103, mobile: 160 },
  { date: "2024-06-04", Restaurants: 439, mobile: 380 },
  { date: "2024-06-05", Restaurants: 88, mobile: 140 },
  { date: "2024-06-06", Restaurants: 294, mobile: 250 },
  { date: "2024-06-07", Restaurants: 323, mobile: 370 },
  { date: "2024-06-08", Restaurants: 385, mobile: 320 },
  { date: "2024-06-09", Restaurants: 438, mobile: 480 },
  { date: "2024-06-10", Restaurants: 155, mobile: 200 },
  { date: "2024-06-11", Restaurants: 92, mobile: 150 },
  { date: "2024-06-12", Restaurants: 492, mobile: 420 },
  { date: "2024-06-13", Restaurants: 81, mobile: 130 },
  { date: "2024-06-14", Restaurants: 426, mobile: 380 },
  { date: "2024-06-15", Restaurants: 307, mobile: 350 },
  { date: "2024-06-16", Restaurants: 371, mobile: 310 },
  { date: "2024-06-17", Restaurants: 475, mobile: 520 },
  { date: "2024-06-18", Restaurants: 107, mobile: 170 },
  { date: "2024-06-19", Restaurants: 341, mobile: 290 },
  { date: "2024-06-20", Restaurants: 408, mobile: 450 },
  { date: "2024-06-21", Restaurants: 169, mobile: 210 },
  { date: "2024-06-22", Restaurants: 317, mobile: 270 },
  { date: "2024-06-23", Restaurants: 480, mobile: 530 },
  { date: "2024-06-24", Restaurants: 132, mobile: 180 },
  { date: "2024-06-25", Restaurants: 141, mobile: 190 },
  { date: "2024-06-26", Restaurants: 434, mobile: 380 },
  { date: "2024-06-27", Restaurants: 448, mobile: 490 },
  { date: "2024-06-28", Restaurants: 149, mobile: 200 },
  { date: "2024-06-29", Restaurants: 103, mobile: 160 },
  { date: "2024-06-30", Restaurants: 446, mobile: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Restaurants: {
    label: "Restaurants",
    color: "var(--primary)",
  },
  mobile: {
    label: "UMKM",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">Total for the last 3 months</span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRestaurants" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Restaurants)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-Restaurants)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area dataKey="mobile" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
            <Area
              dataKey="Restaurants"
              type="natural"
              fill="url(#fillRestaurants)"
              stroke="var(--color-Restaurants)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
