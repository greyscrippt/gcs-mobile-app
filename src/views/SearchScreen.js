import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

import Celestrak from "../celestrak/celestrak-api";
import { appStyles } from "../styles/styles";

const MOCK = false;

const mockSatelliteData = [
    {
        OBJECT_NAME:            "ISS (ZARIA)",
        OBJECT_ID:              "1998-067A",
        EPOCH:                  "2023-10-07T12:30:35.992224",
        MEAN_MOTION:            15.4989303,
        ECCENTRICITY:           0.000534,
        INCLINATION:            51.6404,
        RA_OF_ASC_NODE:         132.1242,
        ARG_OF_PERICENTER:      82.1275,
        MEAN_ANOMALY:           1.0399,
        EPHEMERIS_TYPE:         0,
        CLASSIFICATION_TYPE:    "U",
        NORAD_CAT_ID:           25544,
        ELEMENT_SET_NO:         999,
        REV_AT_EPOCH:           41921,
        BSTAR:                  0.00035612,
        MEAN_MOTION_DOT:        0.00019849,
        MEAN_MOTION_DDOT:       0,
    },
    {
        OBJECT_NAME:            "ISS (ZARIA 2)",
        OBJECT_ID:              "1998-067A2",
        EPOCH:                  "2023-10-07T12:30:35.992224",
        MEAN_MOTION:            15.4989303,
        ECCENTRICITY:           0.000534,
        INCLINATION:            51.6404,
        RA_OF_ASC_NODE:         132.1242,
        ARG_OF_PERICENTER:      82.1275,
        MEAN_ANOMALY:           1.0399,
        EPHEMERIS_TYPE:         0,
        CLASSIFICATION_TYPE:    "U",
        NORAD_CAT_ID:           25544,
        ELEMENT_SET_NO:         999,
        REV_AT_EPOCH:           41921,
        BSTAR:                  0.00035612,
        MEAN_MOTION_DOT:        0.00019849,
        MEAN_MOTION_DDOT:       0,
    },
];

function TextSpecView(props) {
    return(
        <View style={appStyles.textSpecView}>
            <Text style={{ fontWeight:600 }}>
                {props.title}:

            </Text>
            <Text style={{ fontWeight:400 }}>
                {props.description}
            </Text>
        </View>
    );
}

function SatelliteResultItem(data) {
    return(
        <View style={appStyles.resultItemCard}>
            <TextSpecView 
                title="Name"
                description={data.OBJECT_NAME}
                />
        </View>
    );
}

export default function SearchScreen() {
    const [searchQuerry, setSearchQuerry] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const SearchResultView = () => {
        return(
            <View>
                <FlatList
                    style={appStyles.resultView}
                    ItemSeparatorComponent={<View style={appStyles.resultItemSeparator} />}
                    data=           { searchResult }
                    renderItem=     {(satellite) => <SatelliteResultItem data={satellite} />}
                    keyExtractor=   {(satellite) => satellite.OBJECT_ID}
                    />
            </View>
        );
    }

    function doSatelliteSearch() {
        if(MOCK) return;

        console.log(searchQuerry);

        Celestrak
            .querryBySatelliteName(searchQuerry)
            .then((res) => {
                console.log(res.body)
                setSearchResult(() => res.body);
            })
            .catch((err) => alert(err));
    }

    return(
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <TextInput
                    onChange={(value) => setSearchQuerry(value)}
                    text={searchQuerry}
                    style={{ width: '80%', height: 40, backgroundColor: 'white' }}
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