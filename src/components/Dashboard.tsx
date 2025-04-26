
import React, { useState } from 'react';
import WaterQualityChart from './WaterQualityChart';
import SafetyPrediction from './SafetyPrediction';
import ParameterCard from './ParameterCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const mockTimeSeriesData = [
  { time: '08:00', value: 7.1 },
  { time: '09:00', value: 7.2 },
  { time: '10:00', value: 7.0 },
  { time: '11:00', value: 7.3 },
  { time: '12:00', value: 7.4 },
  { time: '13:00', value: 7.2 },
  { time: '14:00', value: 7.0 },
];

const mockTemperatureData = [
  { time: '08:00', value: 22.1 },
  { time: '09:00', value: 22.3 },
  { time: '10:00', value: 22.8 },
  { time: '11:00', value: 23.2 },
  { time: '12:00', value: 23.5 },
  { time: '13:00', value: 23.7 },
  { time: '14:00', value: 23.4 },
];

const mockTurbidityData = [
  { time: '08:00', value: 1.2 },
  { time: '09:00', value: 1.3 },
  { time: '10:00', value: 1.5 },
  { time: '11:00', value: 1.8 },
  { time: '12:00', value: 2.0 },
  { time: '13:00', value: 1.7 },
  { time: '14:00', value: 1.5 },
];

const mockTDSData = [
  { time: '08:00', value: 145 },
  { time: '09:00', value: 152 },
  { time: '10:00', value: 158 },
  { time: '11:00', value: 162 },
  { time: '12:00', value: 165 },
  { time: '13:00', value: 160 },
  { time: '14:00', value: 155 },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const safetyDetails = [
    {
      parameter: 'pH',
      status: 'good' as const,
      value: 7.2,
      unit: 'pH'
    },
    {
      parameter: 'Temp',
      status: 'good' as const,
      value: 23.4,
      unit: '°C'
    },
    {
      parameter: 'TDS',
      status: 'warning' as const,
      value: 155,
      unit: 'ppm'
    }
  ];

  return (
    <div className="pb-16">
      <div className="mb-4">
        <SafetyPrediction 
          isSafe={true} 
          confidenceScore={92} 
          details={safetyDetails}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <ParameterCard
          title="pH Level"
          value={7.2}
          unit="pH"
          change={{ value: 0.2, isIncrease: true }}
          status="good"
          icon={<span className="text-water-dark text-lg">pH</span>}
          detailsPath="/parameters/ph"
        />
        
        <ParameterCard
          title="Temperature"
          value={23.4}
          unit="°C"
          change={{ value: 0.3, isIncrease: true }}
          status="good"
          icon={<span className="text-water-dark text-lg">°C</span>}
          detailsPath="/parameters/temperature"
        />
        
        <ParameterCard
          title="Turbidity"
          value={1.5}
          unit="NTU"
          change={{ value: 0.2, isIncrease: false }}
          status="good"
          icon={<span className="text-water-dark text-lg">T</span>}
          detailsPath="/parameters/turbidity"
        />
        
        <ParameterCard
          title="TDS"
          value={155}
          unit="ppm"
          change={{ value: 5, isIncrease: false }}
          status="warning"
          icon={<span className="text-water-dark text-lg">TDS</span>}
          detailsPath="/parameters/tds"
        />
      </div>
      
      <div className="mb-4">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="ph">pH</TabsTrigger>
            <TabsTrigger value="temp">Temp</TabsTrigger>
            <TabsTrigger value="turb">Turb</TabsTrigger>
            <TabsTrigger value="tds">TDS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <WaterQualityChart 
              title="pH Level" 
              data={mockTimeSeriesData}
              unit="pH"
              color="#0EA5E9"
              idealRange={[6.5, 8.5]}
            />
            
            <WaterQualityChart 
              title="Temperature" 
              data={mockTemperatureData}
              unit="°C"
              color="#14B8A6"
              idealRange={[20, 25]}
            />
            
            <WaterQualityChart 
              title="Turbidity" 
              data={mockTurbidityData}
              unit="NTU"
              color="#6366F1"
              idealRange={[0, 5]}
              type="area"
            />
            
            <WaterQualityChart 
              title="Total Dissolved Solids" 
              data={mockTDSData}
              unit="ppm"
              color="#8B5CF6"
              idealRange={[50, 300]}
            />
          </TabsContent>
          
          <TabsContent value="ph">
            <WaterQualityChart 
              title="pH Level" 
              data={mockTimeSeriesData}
              unit="pH"
              color="#0EA5E9"
              idealRange={[6.5, 8.5]}
            />
          </TabsContent>
          
          <TabsContent value="temp">
            <WaterQualityChart 
              title="Temperature" 
              data={mockTemperatureData}
              unit="°C"
              color="#14B8A6"
              idealRange={[20, 25]}
            />
          </TabsContent>
          
          <TabsContent value="turb">
            <WaterQualityChart 
              title="Turbidity" 
              data={mockTurbidityData}
              unit="NTU"
              color="#6366F1"
              idealRange={[0, 5]}
              type="area"
            />
          </TabsContent>
          
          <TabsContent value="tds">
            <WaterQualityChart 
              title="Total Dissolved Solids" 
              data={mockTDSData}
              unit="ppm"
              color="#8B5CF6"
              idealRange={[50, 300]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
