import * as React from 'react';

import { NavigationContainer }      from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapView        from './src/views/MapView/MapView';
import HomeView       from './src/views/HomeView/HomeView';
import SettingsView   from './src/views/SettingsView/SettingsView';
import TelemetryView  from './src/views/TelemetryView/TelemetryView';

import SatelliteDataContext from './src/global/SatelliteDataContext';
import SatellitesScreen         from './src/views/SatellitesView/SatellitesView';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SatelliteDataContext.Provider value={[]}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home"       component={ HomeView      } />
          <Tab.Screen name="Telemetry"  component={ TelemetryView } />
          <Tab.Screen name="Search"     component={ SatellitesScreen    } />
          <Tab.Screen name="Map"        component={ MapView       } />
          <Tab.Screen name="Settings"   component={ SettingsView  } />
        </Tab.Navigator>
      </NavigationContainer>
    </SatelliteDataContext.Provider>
  );
}