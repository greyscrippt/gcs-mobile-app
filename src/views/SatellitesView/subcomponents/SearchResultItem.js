import { Image, Text, View } from "react-native";

import TextSpecView from "./TextSpecView";

export default function SatelliteResultItem(data) {
    return(
        <View style={{ display: 'flex', flexDirection: 'row', padding: 15, backgroundColor: 'white' }}>
            <Image
                style={{ width: 40, height: 40, marginRight: 8 }}
                source={require("/home/moonbeam/workspaces/nodejs/gcs-mobile-app/assets/satellite.png")}
                />

            <View>
                <TextSpecView 
                    title="Name"
                    description={data.data.OBJECT_NAME}
                    />

                <TextSpecView 
                    title="ID"
                    description={data.data.OBJECT_ID}
                    />
            </View>
        </View>
    );
}