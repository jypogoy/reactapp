import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Visits: 2200, Orders: 3400, Rejects: 2000 },
  { name: 'Tue', Visits: 1280, Orders: 2398, Rejects: 500 },
  { name: 'Wed', Visits: 5000, Orders: 4300, Rejects: 800 },
  { name: 'Thu', Visits: 4780, Orders: 2908, Rejects: 3200 },
  { name: 'Fri', Visits: 5890, Orders: 4800, Rejects: 5000 },
  { name: 'Sat', Visits: 4390, Orders: 3800, Rejects: 2000 },
  { name: 'Sun', Visits: 4490, Orders: 4300, Rejects: 800 },
];

function OrderChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Rejects" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default OrderChart;