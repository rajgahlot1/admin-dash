import {XAxis,CartesianGrid,Tooltip,BarChart,Legend,Bar,PieChart,Pie,LineChart,YAxis,Line,ResponsiveContainer} from 'recharts'

 export default function Analytics2(){
   const data02 = [
     {
       Followers: 4000,
       Earning: 2400,
     },
     {
       Followers: 3000,
       Earning: 1398,
     },
     {
       Followers: 2000,
       Earning: 4000,
     },
     {
       Followers: 2780,
       Earning: 3908,
     },
     {
       Followers: 1890,
       Earning: 2000,
     },
   ];

  return(
    <>
      <div className="AnalyticII d-flex align-items-center flex-column justify-content-center position-relative h-100" style={{ zIndex: "1", width: '100%', height: '100%' }}>
        <div className="Chart" style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data02}
              margin={{ right: 10, top: 10 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Followers" stroke="#810551" />
              <Line type="monotone" dataKey="Earning" stroke="#00464e" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}