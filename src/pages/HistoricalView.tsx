
import React from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HistoricalData from '@/components/HistoricalData';

const HistoricalView: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Historical Data" />
      
      <div className="container p-4">
        <HistoricalData />
      </div>
      
      <Navigation />
    </div>
  );
};

export default HistoricalView;
