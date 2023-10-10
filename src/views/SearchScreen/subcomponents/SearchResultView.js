import { View, FlatList } from "react-native";

import SatelliteResultItem from "./SearchResultItem";

import { appStyles } from "../../../styles/styles";

export default function SearchResultView() {
    return(
        <View>
            <FlatList
                style={appStyles.resultView}
                ItemSeparatorComponent={<View style={appStyles.resultItemSeparator} />}
                data=           { {} }
                renderItem=     {(satellite) => <SatelliteResultItem data={satellite} />}
                keyExtractor=   {(satellite) => satellite.OBJECT_ID}
                />
        </View>
    );
}