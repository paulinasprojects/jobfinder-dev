"use client"

import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { day: "Mon", Applications: 186, Views: 80 },
  { day: "Tue", Applications: 305, Views: 120 },
  { day: "Wed", Applications: 237, Views: 60 },
  { day: "Thu", Applications: 190, Views: 100 },
  { day: "Fri", Applications: 209, Views: 70 },
  { day: "Sat", Applications: 214, Views: 110 },
  { day: "Sun", Applications: 214, Views: 90 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ListingPerformanceChart() {
  return (
    <Card className=" bg-[#1c1c24] border-[#1c1c24] xl:w-[620px] xl:h-[332px] max-sm:w-[350px] md:w-[620px]">
      <CardHeader>
        <CardTitle className="text-white mb-2 text-[22px] font-bold">Listing Performance</CardTitle>
        <div className="flex gap-9 items-center">
          <span className="text-white flex gap-1 items-center text-[13px]">
            <div className="w-2.5 h-2.5 rounded-full bg-yellowCard"/>
            Views
          </span>
          <span className="text-white flex gap-1 items-center text-[13px]">
            <div className="w-2.5 h-2.5 rounded-full bg-greenButtonColor"/>
            Applications
            </span>
        </div>
      </CardHeader>
      <CardContent className="]">
        <ChartContainer config={chartConfig} className="xl:w-[561px] xl:h-[198px]">
          {/* <ResponsiveContainer minWidth={350} height={350}> */}
          <BarChart accessibilityLayer data={chartData} barSize={5}>
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="Applications" fill="#0BAB7C" radius={4}  />
            <Bar dataKey="Views" fill="#FDDD8C" radius={4}/>
          </BarChart>
          {/* </ResponsiveContainer> */}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
