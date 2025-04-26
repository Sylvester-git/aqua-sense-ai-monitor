
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WaterQualityChart from './WaterQualityChart';
import { Info, Droplet, ThermometerIcon, Gauge } from 'lucide-react';

interface ParameterInfo {
  title: string;
  unit: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  idealRange: [number, number];
}

const parameters: Record<string, ParameterInfo> = {
  ph: {
    title: 'pH Level',
    unit: 'pH',
    color: '#0EA5E9',
    icon: <Droplet className="w-5 h-5 text-blue-500" />,
    description: 'pH indicates the acidity or alkalinity of water. A balanced pH is crucial for aquatic life and water safety.',
    idealRange: [6.5, 8.5]
  },
  temperature: {
    title: 'Temperature',
    unit: '°C',
    color: '#14B8A6',
    icon: <ThermometerIcon className="w-5 h-5 text-teal-500" />,
    description: 'Water temperature affects dissolved oxygen levels, chemical reactions, and aquatic life.',
    idealRange: [20, 25]
  },
  turbidity: {
    title: 'Turbidity',
    unit: 'NTU',
    color: '#6366F1',
    icon: <Info className="w-5 h-5 text-indigo-500" />,
    description: 'Turbidity measures water clarity and indicates the presence of suspended particles.',
    idealRange: [0, 5]
  },
  tds: {
    title: 'Total Dissolved Solids',
    unit: 'ppm',
    color: '#8B5CF6',
    icon: <Gauge className="w-5 h-5 text-purple-500" />,
    description: 'TDS represents the total concentration of dissolved substances in water.',
    idealRange: [0, 500]
  }
};

// Mock data for demonstration
const mockTimeData = [
  { time: '00:00', value: 7.2 },
  { time: '04:00', value: 7.3 },
  { time: '08:00', value: 7.1 },
  { time: '12:00', value: 7.4 },
  { time: '16:00', value: 7.2 },
  { time: '20:00', value: 7.3 }
];

interface ParameterViewProps {
  paramId?: string;
}

const ParameterView: React.FC<ParameterViewProps> = ({ paramId = 'ph' }) => {
  const parameter = parameters[paramId] || parameters.ph;

  return (
    <div className="space-y-4 pb-16">
      <Card className="water-card">
        <CardHeader className="space-y-1">
          <div className="flex items-center space-x-2">
            {parameter.icon}
            <CardTitle>{parameter.title}</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">{parameter.description}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <div className="text-sm font-medium">Current Reading</div>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">{mockTimeData[mockTimeData.length - 1].value}</span>
                <span className="text-sm text-muted-foreground">{parameter.unit}</span>
              </div>
            </div>
            
            <div className="grid gap-2">
              <div className="text-sm font-medium">24-Hour Trend</div>
              <WaterQualityChart
                title={parameter.title}
                data={mockTimeData}
                unit={parameter.unit}
                color={parameter.color}
                type="area"
                idealRange={parameter.idealRange}
              />
            </div>
            
            <div className="grid gap-2">
              <div className="text-sm font-medium">Ideal Range</div>
              <div className="text-sm">
                {parameter.idealRange[0]} - {parameter.idealRange[1]} {parameter.unit}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParameterView;
