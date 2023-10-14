import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

import Celestrak from "../../celestrak/celestrak-api";

import SearchResultItem from "./subcomponents/SearchResultItem";

import { appStyles } from "../../styles/styles";

export default function TelemetryView() {
    const [searchQuerry, setSearchQuerry] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    function SatelliteResultsView() {
        return(
            <View>
                <FlatList
                    style={appStyles.resultView}
                    ItemSeparatorComponent={<View style={appStyles.resultItemSeparator} />}

                    data=           { searchResult }
                    renderItem=     { (sat) => <SearchResultItem data={sat.item} />}
                    keyExtractor=   { item => item.OBJECT_ID }
                    />
            </View>
        );
    }

    return(
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <TextInput
                    onChangeText={ setSearchQuerry }
                    value={searchQuerry}
                    style={{ width: '80%', height: 40, backgroundColor: 'white' }}
                    />


                <Button
                    title="Search"
                    onPress={ () => {
                        if(searchQuerry == "") {
                            setSearchResult("");
                            return;
                        }

                        Celestrak
                            .querryBySatelliteName(searchQuerry)
                            .then((res) => {
                                setSearchResult(res.data);
                            })
                            .catch((err) => console.log(err));
                    }}
                    />
            </View>

            <SatelliteResultsView />
        </View>
    );
}