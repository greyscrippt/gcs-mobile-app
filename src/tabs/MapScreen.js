import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from '../styles/styles';

export default function MapScreen() {
    return(
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }