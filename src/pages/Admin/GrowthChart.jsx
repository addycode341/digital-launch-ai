import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";


const GrowthChart=({data})=>{


return(

<div className="
h-64
">


<ResponsiveContainer
width="100%"
height="100%"
>


<LineChart data={data}>


<XAxis
dataKey="date"
/>


<YAxis
allowDecimals={false}
/>


<Tooltip />



<Line

type="monotone"

dataKey="visitors"

stroke="#8884d8"

strokeWidth={3}

/>



<Line

type="monotone"

dataKey="leads"

stroke="#22c55e"

strokeWidth={3}

/>



</LineChart>


</ResponsiveContainer>


</div>

)


}



export default GrowthChart;