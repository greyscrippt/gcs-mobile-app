import { Text, View } from "react-native";

import TextSpecView from "./TextSpecView";

import { appStyles } from "../../../styles/styles";

export default function SatelliteResultItem(data) {
    return(
        <View style={appStyles.resultItemCard}>
            <TextSpecView 
                title="Name"
                description={data.data.OBJECT_NAME}
                />

            <TextSpecView 
                title="ID"
                description={data.data.OBJECT_ID}
                />
        </View>
    );
}