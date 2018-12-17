import React from "react"
import { ResponsiveBar } from '@nivo/bar'

function BarChart() {
  return (
    <ResponsiveBar
        data={[
          {
            "country": "AD",
            "hot dog": 139,
            "hot dogColor": "hsl(189, 70%, 50%)",
            "burger": 168,
            "burgerColor": "hsl(24, 70%, 50%)",
            "sandwich": 39,
            "sandwichColor": "hsl(310, 70%, 50%)",
            "kebab": 17,
            "kebabColor": "hsl(134, 70%, 50%)",
            "fries": 53,
            "friesColor": "hsl(103, 70%, 50%)",
            "donut": 28,
            "donutColor": "hsl(213, 70%, 50%)"
          },
          {
            "country": "AE",
            "hot dog": 89,
            "hot dogColor": "hsl(215, 70%, 50%)",
            "burger": 76,
            "burgerColor": "hsl(138, 70%, 50%)",
            "sandwich": 37,
            "sandwichColor": "hsl(213, 70%, 50%)",
            "kebab": 105,
            "kebabColor": "hsl(293, 70%, 50%)",
            "fries": 21,
            "friesColor": "hsl(151, 70%, 50%)",
            "donut": 168,
            "donutColor": "hsl(42, 70%, 50%)"
          },
          {
            "country": "AF",
            "hot dog": 66,
            "hot dogColor": "hsl(307, 70%, 50%)",
            "burger": 183,
            "burgerColor": "hsl(269, 70%, 50%)",
            "sandwich": 106,
            "sandwichColor": "hsl(349, 70%, 50%)",
            "kebab": 195,
            "kebabColor": "hsl(319, 70%, 50%)",
            "fries": 148,
            "friesColor": "hsl(265, 70%, 50%)",
            "donut": 55,
            "donutColor": "hsl(215, 70%, 50%)"
          },
          {
            "country": "AG",
            "hot dog": 185,
            "hot dogColor": "hsl(120, 70%, 50%)",
            "burger": 90,
            "burgerColor": "hsl(96, 70%, 50%)",
            "sandwich": 36,
            "sandwichColor": "hsl(137, 70%, 50%)",
            "kebab": 64,
            "kebabColor": "hsl(145, 70%, 50%)",
            "fries": 68,
            "friesColor": "hsl(191, 70%, 50%)",
            "donut": 50,
            "donutColor": "hsl(176, 70%, 50%)"
          },
          {
            "country": "AI",
            "hot dog": 105,
            "hot dogColor": "hsl(27, 70%, 50%)",
            "burger": 135,
            "burgerColor": "hsl(23, 70%, 50%)",
            "sandwich": 52,
            "sandwichColor": "hsl(135, 70%, 50%)",
            "kebab": 182,
            "kebabColor": "hsl(114, 70%, 50%)",
            "fries": 19,
            "friesColor": "hsl(120, 70%, 50%)",
            "donut": 166,
            "donutColor": "hsl(154, 70%, 50%)"
          },
          {
            "country": "AL",
            "hot dog": 86,
            "hot dogColor": "hsl(155, 70%, 50%)",
            "burger": 44,
            "burgerColor": "hsl(275, 70%, 50%)",
            "sandwich": 17,
            "sandwichColor": "hsl(127, 70%, 50%)",
            "kebab": 178,
            "kebabColor": "hsl(58, 70%, 50%)",
            "fries": 69,
            "friesColor": "hsl(134, 70%, 50%)",
            "donut": 145,
            "donutColor": "hsl(213, 70%, 50%)"
          },
          {
            "country": "AM",
            "hot dog": 29,
            "hot dogColor": "hsl(110, 70%, 50%)",
            "burger": 162,
            "burgerColor": "hsl(195, 70%, 50%)",
            "sandwich": 171,
            "sandwichColor": "hsl(16, 70%, 50%)",
            "kebab": 108,
            "kebabColor": "hsl(180, 70%, 50%)",
            "fries": 162,
            "friesColor": "hsl(45, 70%, 50%)",
            "donut": 194,
            "donutColor": "hsl(352, 70%, 50%)"
          }
        ]}
        keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut"
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        groupMode="grouped"
        colors="nivo"
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "fries"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "sandwich"
                },
                "id": "lines"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "middle",
            "legendOffset": 32
        }}
        axisLeft={{
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "middle",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "justify": false,
                "translateX": 120,
                "translateY": 0,
                "itemsSpacing": 2,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemDirection": "left-to-right",
                "itemOpacity": 0.85,
                "symbolSize": 20,
                "effects": [
                    {
                        "on": "hover",
                        "style": {
                            "itemOpacity": 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default BarChart
