import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

import Celestrak from "../celestrak/celestrak-api";

const searchStyle = StyleSheet.create({
    satelliteResultItem: {
        padding: '15px',
    },
});

function SatelliteResultItem(data) {
    return(
        <View>
            <Text>Object Name: {data.OBJECT_NAME}</Text>
        </View>
    );
}

export default function SatelliteSearchScreen() {
    const [searchQuerry, setSearchQuerry] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const SearchResultView = () => {
        return(
            <View>
                <FlatList
                    data={searchResult}
                    renderItem={(satellite) => <SatelliteResultItem data={satellite} />}
                    keyExtractor={(satellite) => satellite.OBJECT_ID}
                    />
            </View>
        );
    }

    function doSatelliteSearch() {
        Celestrak
            .querryBySatelliteName(searchQuerry)
            .then((res) => {
                setSearchResult(JSON.parse(res.body));
            })
            .catch((err) => alert(err));
    }

    return(
        <View>
            <View>
                <Text>Search</Text>

                <TextInput
                    onChange={setSearchQuerry}
                    text={searchQuerry}
                    />

                <Button
                    title="Search"
                    onPress={doSatelliteSearch}
                    />
            </View>

            <SearchResultView />
        </View>
    );
}