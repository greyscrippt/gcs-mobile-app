import { View, Text, Image } from "react-native";
import { appStyles } from "../../../styles/styles";

export default function TextSpecView(props) {
    return(
        <View style={appStyles.textSpecView}>
            <Text style={{ fontWeight:600, marginRight: 5 }}>
                {props.title}:
            </Text>
            <Text style={{ fontWeight:400 }}>
                {props.description}
            </Text>
        </View>
    );
}