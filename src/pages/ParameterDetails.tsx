
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ParameterView from '@/components/ParameterView';

const ParameterDetails: React.FC = () => {
  const { paramId } = useParams();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Header 
        title={`${paramId?.charAt(0).toUpperCase()}${paramId?.slice(1)} Details`}
        onMenuClick={() => navigate(-1)}
      />
      
      <div className="container p-4">
        <ParameterView paramId={paramId} />
      </div>
      
      <Navigation />
    </div>
  );
};

export default ParameterDetails;
