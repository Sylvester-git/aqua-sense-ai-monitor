
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DataPoint {
  time: string;
  value: number;
}

interface WaterQualityChartProps {
  title: string;
  data: DataPoint[];
  unit: string;
  color: string;
  type?: 'line' | 'area';
  idealRange?: [number, number];
}

const WaterQualityChart: React.FC<WaterQualityChartProps> = ({ 
  title, 
  data, 
  unit, 
  color,
  type = 'line',
  idealRange
}) => {
  return (
    <Card className="water-card">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          {idealRange && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Ideal: {idealRange[0]} - {idealRange[1]} {unit}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            {type === 'line' ? (
              <LineChart
                data={data}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 10 }} 
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  tickMargin={10}
                  axisLine={false}
                  unit={unit}
                  width={40}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                  labelFormatter={(value) => `Time: ${value}`}
                  formatter={(value) => [`${value} ${unit}`, title]}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={color} 
                  strokeWidth={2}
                  dot={{ stroke: color, strokeWidth: 2, r: 3 }}
                  activeDot={{ r: 5 }}
                />
                {idealRange && (
                  <>
                    <Line 
                      type="monotone" 
                      dataKey={() => idealRange[0]} 
                      stroke={color} 
                      strokeDasharray="3 3"
                      strokeOpacity={0.4}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey={() => idealRange[1]} 
                      stroke={color} 
                      strokeDasharray="3 3"
                      strokeOpacity={0.4}
                      dot={false}
                    />
                  </>
                )}
              </LineChart>
            ) : (
              <AreaChart
                data={data}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 10 }} 
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 10 }}
                  tickMargin={10}
                  axisLine={false}
                  unit={unit}
                  width={40}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                  labelFormatter={(value) => `Time: ${value}`}
                  formatter={(value) => [`${value} ${unit}`, title]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color}
                  fill={color}
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterQualityChart;
