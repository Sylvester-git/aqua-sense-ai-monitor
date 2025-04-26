
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Settings as SettingsIcon } from 'lucide-react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Settings" />
      
      <div className="container p-4">
        <div className="space-y-4 pb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2 text-water" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="alerts" className="text-sm">
                  Critical Alerts
                </Label>
                <Switch id="alerts" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="daily-report" className="text-sm">
                  Daily Report
                </Label>
                <Switch id="daily-report" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="weekly-summary" className="text-sm">
                  Weekly Summary
                </Label>
                <Switch id="weekly-summary" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2 text-water" />
                Measurement Units
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="temperature-unit" className="text-sm">
                  Temperature
                </Label>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="celsius" className="text-sm">°C</Label>
                  <Switch id="temperature-unit" defaultChecked />
                  <Label htmlFor="fahrenheit" className="text-sm">°F</Label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="tds-unit" className="text-sm">
                  TDS
                </Label>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="ppm" className="text-sm">ppm</Label>
                  <Switch id="tds-unit" />
                  <Label htmlFor="mg/l" className="text-sm">mg/L</Label>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2 text-water" />
                Parameter Thresholds
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label className="text-sm">pH Range</Label>
                  <span className="text-sm text-muted-foreground">6.5 - 8.5</span>
                </div>
                <Slider defaultValue={[6.5, 8.5]} min={0} max={14} step={0.1} />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label className="text-sm">Temperature Range</Label>
                  <span className="text-sm text-muted-foreground">20 - 25 °C</span>
                </div>
                <Slider defaultValue={[20, 25]} min={0} max={40} step={0.5} />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label className="text-sm">Turbidity Limit</Label>
                  <span className="text-sm text-muted-foreground">5 NTU</span>
                </div>
                <Slider defaultValue={[5]} min={0} max={20} step={0.5} />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label className="text-sm">TDS Range</Label>
                  <span className="text-sm text-muted-foreground">50 - 300 ppm</span>
                </div>
                <Slider defaultValue={[50, 300]} min={0} max={1000} step={10} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2 text-water" />
                Device Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="sampling-rate" className="text-sm">
                  Sampling Rate
                </Label>
                <div className="text-sm text-muted-foreground">5 minutes</div>
              </div>
              <Slider defaultValue={[5]} min={1} max={60} step={1} />
              
              <Separator className="my-4" />
              
              <div className="flex items-center justify-between">
                <Label htmlFor="calibration" className="text-sm">
                  Last Calibration
                </Label>
                <div className="text-sm text-muted-foreground">April 22, 2025</div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="firmware" className="text-sm">
                  Firmware Version
                </Label>
                <div className="text-sm text-muted-foreground">v2.3.1</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Settings;
