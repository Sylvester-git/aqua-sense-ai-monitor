
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChartBar,
  ChartLine, 
  Settings,
  Menu
} from 'lucide-react';

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navigationItems: NavigationItem[] = [
    {
      label: 'Dashboard',
      icon: <ChartBar className="h-5 w-5" />,
      path: '/'
    },
    {
      label: 'Historical',
      icon: <ChartLine className="h-5 w-5" />,
      path: '/historical'
    },
    {
      label: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      path: '/settings'
    }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-10">
      <div className="flex items-center justify-around">
        {navigationItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            size="lg"
            className={`flex-1 flex-col py-3 h-auto rounded-none ${
              location.pathname === item.path 
                ? 'text-water dark:text-water' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => navigate(item.path)}
          >
            <div>{item.icon}</div>
            <span className="text-xs mt-1">{item.label}</span>
            {location.pathname === item.path && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 water-gradient"></div>
            )}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
