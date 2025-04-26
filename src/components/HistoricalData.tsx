
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import WaterQualityChart from './WaterQualityChart';
import { ChartLine, Calendar as CalendarIcon } from 'lucide-react';

// Mock data
const mockHistoricalData = {
  daily: [
    { time: '00:00', value: 7.0 },
    { time: '04:00', value: 7.1 },
    { time: '08:00', value: 7.3 },
    { time: '12:00', value: 7.4 },
    { time: '16:00', value: 7.2 },
    { time: '20:00', value: 7.1 },
  ],
  weekly: [
    { time: 'Mon', value: 7.1 },
    { time: 'Tue', value: 7.2 },
    { time: 'Wed', value: 7.3 },
    { time: 'Thu', value: 7.2 },
    { time: 'Fri', value: 7.1 },
    { time: 'Sat', value: 7.0 },
    { time: 'Sun', value: 7.1 },
  ],
  monthly: [
    { time: 'Week 1', value: 7.1 },
    { time: 'Week 2', value: 7.2 },
    { time: 'Week 3', value: 7.0 },
    { time: 'Week 4', value: 7.1 },
  ]
};

const temperatureHistoricalData = {
  daily: [
    { time: '00:00', value: 22.0 },
    { time: '04:00', value: 21.5 },
    { time: '08:00', value: 22.3 },
    { time: '12:00', value: 23.5 },
    { time: '16:00', value: 23.8 },
    { time: '20:00', value: 22.9 },
  ],
  weekly: [
    { time: 'Mon', value: 22.5 },
    { time: 'Tue', value: 22.8 },
    { time: 'Wed', value: 23.1 },
    { time: 'Thu', value: 23.4 },
    { time: 'Fri', value: 23.2 },
    { time: 'Sat', value: 22.9 },
    { time: 'Sun', value: 22.7 },
  ],
  monthly: [
    { time: 'Week 1', value: 22.6 },
    { time: 'Week 2', value: 23.1 },
    { time: 'Week 3', value: 23.4 },
    { time: 'Week 4', value: 22.9 },
  ]
};

const HistoricalData: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedParameter, setSelectedParameter] = useState('ph');
  
  const parameters = [
    { id: 'ph', label: 'pH', unit: 'pH', color: '#0EA5E9', data: mockHistoricalData },
    { id: 'temp', label: 'Temperature', unit: '°C', color: '#14B8A6', data: temperatureHistoricalData },
    { id: 'turb', label: 'Turbidity', unit: 'NTU', color: '#6366F1', data: mockHistoricalData },
    { id: 'tds', label: 'TDS', unit: 'ppm', color: '#8B5CF6', data: mockHistoricalData },
  ];
  
  const currentParameter = parameters.find(p => p.id === selectedParameter);
  
  return (
    <div className="pb-16 space-y-4">
      <Card className="water-card">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-medium">Historical Data</CardTitle>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowCalendar(!showCalendar)}
              className="text-xs h-8 px-2"
            >
              <CalendarIcon className="mr-1 h-4 w-4" />
              {format(selectedDate, 'MMM d, yyyy')}
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {showCalendar && (
            <div className="border rounded-md p-2 mb-3">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date);
                    setShowCalendar(false);
                  }
                }}
                className="rounded-md"
              />
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <Tabs 
              value={timeRange} 
              onValueChange={(value) => setTimeRange(value as typeof timeRange)}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <Tabs 
            value={selectedParameter} 
            onValueChange={setSelectedParameter}
            className="w-full"
          >
            <TabsList className="grid grid-cols-4 w-full">
              {parameters.map(param => (
                <TabsTrigger key={param.id} value={param.id}>
                  {param.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {currentParameter && (
            <WaterQualityChart 
              title={`${currentParameter.label} History`}
              data={currentParameter.data[timeRange]}
              unit={currentParameter.unit}
              color={currentParameter.color}
            />
          )}
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-water-dark">
              <ChartLine className="h-4 w-4 mr-1" />
              <span>Statistics</span>
            </div>
            <div className="flex space-x-4">
              <div className="text-xs">
                <div className="text-gray-500">Avg</div>
                <div className="font-medium">{currentParameter?.id === 'temp' ? '23.1°C' : '7.2 pH'}</div>
              </div>
              <div className="text-xs">
                <div className="text-gray-500">Min</div>
                <div className="font-medium">{currentParameter?.id === 'temp' ? '21.5°C' : '7.0 pH'}</div>
              </div>
              <div className="text-xs">
                <div className="text-gray-500">Max</div>
                <div className="font-medium">{currentParameter?.id === 'temp' ? '23.8°C' : '7.4 pH'}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoricalData;
