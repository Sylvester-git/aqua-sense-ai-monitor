
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ParameterCardProps {
  title: string;
  value: number;
  unit: string;
  change?: {
    value: number;
    isIncrease: boolean;
  };
  status: 'good' | 'warning' | 'critical';
  icon: React.ReactNode;
  detailsPath: string;
}

const ParameterCard: React.FC<ParameterCardProps> = ({
  title,
  value,
  unit,
  change,
  status,
  icon,
  detailsPath
}) => {
  const navigate = useNavigate();
  
  const statusStyles = {
    good: "text-safe-DEFAULT",
    warning: "text-amber-500",
    critical: "text-unsafe-DEFAULT"
  };
  
  const statusBgStyles = {
    good: "bg-safe-light",
    warning: "bg-amber-100",
    critical: "bg-unsafe-light"
  };
  
  return (
    <Card className="water-card">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${statusBgStyles[status]}`}>
              {icon}
            </div>
            <div>
              <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400">{title}</h3>
              <div className="flex items-baseline space-x-2">
                <p className="text-2xl font-bold">{value}</p>
                <span className="text-sm text-gray-500">{unit}</span>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/parameter/${detailsPath}`)}
            className="text-water-dark self-end"
          >
            Details
          </Button>
        </div>
        
        {change && (
          <div className="mt-2 flex items-center">
            <span className={`text-xs ${change.isIncrease ? 'text-unsafe-DEFAULT' : 'text-safe-DEFAULT'}`}>
              {change.isIncrease ? '↑' : '↓'} {Math.abs(change.value)} {unit}
            </span>
            <span className="text-xs text-gray-500 ml-1">
              from last hour
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ParameterCard;
