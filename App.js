import * as React from 'react';

import { NavigationContainer }      from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WorldMapView   from './src/views/WorldMapView/WorldMapView';
import HomeView       from './src/views/HomeView/HomeView';
import SettingsView   from './src/views/SettingsView/SettingsView';
import TelemetryView  from './src/views/TelemetryView/TelemetryView';

import SatelliteDataContext from './src/global/SatelliteDataContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SatelliteDataContext.Provider value={[]}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home"       component={ HomeView          } />
          <Tab.Screen name="Telemetry"  component={ TelemetryView     } />
          <Tab.Screen name="Map"        component={ WorldMapView      } />
          <Tab.Screen name="Settings"   component={ SettingsView      } />
        </Tab.Navigator>
      </NavigationContainer>
    </SatelliteDataContext.Provider>
  );
}