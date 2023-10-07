import * as React from 'react';

import { NavigationContainer }      from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen        from './src/views/MapScreen';
import HomeScreen       from './src/views/HomeScreen';
import SettingsScreen   from './src/views/SettingsScreen';
import TelemetryScreen  from './src/views/TelemetryScreen';
import AnalyticsScreen  from './src/views/AnalyticsScreen';

import SatelliteDataContext from './src/global/SatelliteDataContext';
import SearchScreen from './src/views/SearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SatelliteDataContext.Provider value={[]}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home"       component={ HomeScreen      } />
          <Tab.Screen name="Telemetry"  component={ TelemetryScreen } />
          <Tab.Screen name="Analytics"  component={ AnalyticsScreen } />
          <Tab.Screen name="Search"     component={ SearchScreen    } />
          <Tab.Screen name="Map"        component={ MapScreen       } />
          <Tab.Screen name="Settings"   component={ SettingsScreen  } />
        </Tab.Navigator>
      </NavigationContainer>
    </SatelliteDataContext.Provider>
  );
}