import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, View, Button, Image, Dimensions, TouchableHighlight } from 'react-native';
import useResultViewModel from "./ResultViewModel";
import ModalView from './SubViews/ModalView';

const ListCell = ({ title, thumbnail }) => (
    <View style={styles.item}>
        <Image source={{ uri: thumbnail }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

function ResultView({ viewModel }) {
    const { results, isModalVisible, nextPage, prevPage, toggleModal, hasNextPage, hasPrevPage } = viewModel;

    return (
        <SafeAreaView style={styles.rootContainer}>
            <Text style={styles.header}>ResultView!</Text>
            <FlatList
                numColumns={2}
                data={results}
                renderItem={({ item }) => <ListCell title={item.title} thumbnail={item.thumbnail} />}
                keyExtractor={item => item.resultId.toString()}
            />
            <TouchableHighlight style={styles.fixedButton}
                onPress={toggleModal} >
                <Text style={styles.buttonTitle}>+</Text>
            </TouchableHighlight>

            <View style={styles.pagination}>
                <Button title="Back" onPress={prevPage} />
                <Button title="Next" onPress={nextPage} disabled={!hasNextPage} />
            </View>
            <ModalView isVisible={isModalVisible} onClose={toggleModal} />
        </SafeAreaView>
    );
}

export default function ResultViewWrapper() {
    const viewModel = useResultViewModel(); // Ensure viewModel is properly created
    return <ResultView viewModel={viewModel} />;
}

const styles = StyleSheet.create({
    rootContainer: {
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
    item: {
        alignItems: 'center',
        width: "50%",
    },
    image: {
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.45,
        borderRadius: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 16,
    },
    fixedButton: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 50,
        // alignContent:'center',
        backgroundColor: "blue",
        bottom: "10%",
        right: "10%"
    },
    buttonTitle: {
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        width: 60,
        height: 60,
    }

});
