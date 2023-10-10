import { Button, TextInput, View } from "react-native";

import SearchResultView from "./subcomponents/SearchResultView";

export default function SearchScreen() {
    return(
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                <TextInput
                    onChange={ () => {} }
                    text={ () => {} }
                    style={{ width: '80%', height: 40, backgroundColor: 'white' }}
                    />


                <Button
                    title="Search"
                    onPress={ () => console.log("Clicked") }
                    />
            </View>

            <SearchResultView />
        </View>
    );
}