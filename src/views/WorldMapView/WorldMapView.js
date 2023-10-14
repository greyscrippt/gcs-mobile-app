import { View } from 'react-native';
import MapView from 'react-native-maps';

import { appStyles } from '../../styles/styles';

export default function WorldMapView() {
  return(
    <View style={appStyles.container}>
      <MapView style={appStyles.map} />
    </View>
  );
}