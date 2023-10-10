import { View, Text } from "react-native";

export default function TextSpecView(props) {
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