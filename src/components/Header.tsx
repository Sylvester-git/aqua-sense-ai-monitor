
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick }) => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-10 water-glassmorphism py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onMenuClick}
            className="text-water-dark dark:text-water-light"
          >
            <Menu />
          </Button>
          <h1 className="text-xl font-semibold text-water-dark dark:text-water-light">
            {title}
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
        <div className="animate-water-wave h-full w-1/2 water-gradient opacity-50"></div>
      </div>
    </header>
  );
};

export default Header;
