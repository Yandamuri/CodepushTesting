import React, { Component } from 'react';
import { Text, View } from 'react-native';
import codePush from "react-native-code-push";
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

class CodepushTesting extends Component{

    componentDidMount() {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello</Text>
            </View>
        );
    }
}

export default codePush(codePushOptions)(CodepushTesting);