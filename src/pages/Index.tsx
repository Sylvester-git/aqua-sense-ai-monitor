
import React from 'react';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="AquaSense Monitor" />
      
      <div className="container p-4">
        <Dashboard />
      </div>
      
      <Navigation />
    </div>
  );
};

export default Index;
