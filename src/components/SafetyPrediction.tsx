
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface SafetyPredictionProps {
  isSafe: boolean;
  confidenceScore: number;
  details?: {
    parameter: string;
    status: 'good' | 'warning' | 'critical';
    value: number;
    unit: string;
  }[];
}

const SafetyPrediction: React.FC<SafetyPredictionProps> = ({ 
  isSafe, 
  confidenceScore,
  details 
}) => {
  const pieData = [
    { name: 'Confidence', value: confidenceScore },
    { name: 'Uncertainty', value: 100 - confidenceScore }
  ];

  const COLORS = isSafe ? ['#059669', '#E5E7EB'] : ['#DC2626', '#E5E7EB'];
  
  const statusColors = {
    good: 'text-safe-DEFAULT',
    warning: 'text-amber-500',
    critical: 'text-unsafe-DEFAULT'
  };

  const statusIndicators = {
    good: '●',
    warning: '▲',
    critical: '✕'
  };

  return (
    <Card className={`water-card border-2 ${isSafe ? 'border-safe-DEFAULT bg-safe-light/10' : 'border-unsafe-DEFAULT bg-unsafe-light/10'}`}>
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="w-1/3">
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={40}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-2/3 pl-2">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-lg">
                {isSafe ? 'Water is Safe' : 'Water is Unsafe'}
              </h3>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              AI Confidence: {confidenceScore}%
            </div>
            
            <Progress 
              value={confidenceScore} 
              className={`h-2 ${isSafe ? 'bg-safe-light' : 'bg-unsafe-light'}`} 
              indicatorClassName={isSafe ? 'bg-safe-DEFAULT' : 'bg-unsafe-DEFAULT'}
            />
          </div>
        </div>
        
        {details && details.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-2 text-xs">
              {details.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`font-medium ${statusColors[item.status]}`}>
                    {statusIndicators[item.status]} {item.parameter}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {item.value} {item.unit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SafetyPrediction;
