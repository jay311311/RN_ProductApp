import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default DetailView = ({thumnil, id}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ResultView!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
