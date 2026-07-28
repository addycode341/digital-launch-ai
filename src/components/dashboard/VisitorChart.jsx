import {
  Line
} from "react-chartjs-2";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
}
from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);



function VisitorChart({data}){


const chartData = {


labels:

data.map(
item=>item.date
),



datasets:[

{

label:"Visitors",

data:

data.map(
item=>item.visits
),


tension:0.4,

borderWidth:3,

pointRadius:5

}

]


};





const options={


responsive:true,


plugins:{


legend:{


labels:{


color:"#ffffff"

}


}


},



scales:{


x:{


ticks:{


color:"#9ca3af"

}

},


y:{


ticks:{


color:"#9ca3af"

}

}


}


};





return(


<div className="
bg-white/5
p-6
rounded-3xl
border
border-white/10
">


<h2 className="
text-xl
font-bold
mb-5
">

Visitor Analytics 📊

</h2>



<div className="h-80">


<Line

data={chartData}

options={options}

/>


</div>



</div>


)


}



export default VisitorChart;