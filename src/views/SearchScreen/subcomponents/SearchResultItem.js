import { View } from "react-native";

import TextSpecView from "./TextSpecView";

import { appStyles } from "../../../styles/styles";

export default function SatelliteResultItem(data) {
    return(
        <View style={appStyles.resultItemCard}>
            <TextSpecView 
                title="Name"
                description={data.OBJECT_NAME}
                />
        </View>
    );
}