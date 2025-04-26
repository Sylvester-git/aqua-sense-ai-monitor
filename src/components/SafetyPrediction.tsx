
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface SafetyPredictionProps {
  probability: number;
  status: 'safe' | 'unsafe';
}

const SafetyPrediction: React.FC<SafetyPredictionProps> = ({ probability, status }) => {
  return (
    <Card className="water-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Safety Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-2xl font-bold",
              status === 'safe' ? "text-safe-DEFAULT" : "text-unsafe-DEFAULT"
            )}>
              {status === 'safe' ? 'Safe' : 'Unsafe'}
            </span>
            <span className="text-sm text-muted-foreground">
              {probability}% confidence
            </span>
          </div>
          
          <Progress 
            value={probability} 
            className={cn(
              "h-3",
              status === 'safe' ? "bg-safe-light" : "bg-unsafe-light"
            )}
          />
          
          <p className="text-sm text-muted-foreground">
            Based on current water quality parameters
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyPrediction;
