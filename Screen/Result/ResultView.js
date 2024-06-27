import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, View, Button, Image, Dimensions, Pressable } from 'react-native';
import ResultViewModel from "./ResultViewModel";
import ModalView from './SubViews/ModalView';

const ListCell = ({ title, thumbnail }) => (
    <View style={styles.item}>
        <Image source={{ uri: thumbnail }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default ResultView = () => {
    const { results, isModalVisible, nextPage, prevPage, toggleModal, hasNextPage, hasPrevPage } = ResultViewModel();

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>ResultView!</Text>
        <FlatList
            numColumns={2}
            data={results}
            renderItem={({ item }) => <ListCell title={item.title} thumbnail={item.thumbnail} />}
            keyExtractor={item => item.resultId.toString()}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.flatListContent}
        />
        <Pressable style={styles.fixedButton} onPress={toggleModal}>
            <Text style={styles.buttonTitle}>+</Text>
        </Pressable>
        <View style={styles.pagination}>
            <Pressable style={styles.pageButton} onPress={prevPage}>
                <Text style={styles.pageButtonText}>Back</Text>
            </Pressable>
            <Pressable style={[styles.pageButton, !hasNextPage && styles.pageButtonDisabled]} onPress={nextPage} disabled={!hasNextPage}>
                <Text style={styles.pageButtonText}>Next</Text>
            </Pressable>
        </View>
        <ModalView isVisible={isModalVisible} onClose={toggleModal} />
    </SafeAreaView>
        // <SafeAreaView style={styles.container}>
        //     <Text style={styles.header}>ResultView!</Text>
        //     <FlatList
        //         numColumns={2}
        //         data={results}
        //         renderItem={({ item }) => <ListCell title={item.title} thumbnail={item.thumbnail} />}
        //         keyExtractor={item => item.resultId.toString()}
        //     />
        //     <Pressable style={styles.fixedButton}
        //         onPress={toggleModal} >
        //         <Text style={styles.buttonTitle}>+</Text>
        //     </Pressable>

        //     <View style={styles.pagination}>
        //         <Button title="Back" onPress={prevPage} />
        //         <Button title="Next" onPress={nextPage} disabled={!hasNextPage} />
        //     </View>
        //     <ModalView isVisible={isModalVisible} onClose={toggleModal} />
        // </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 16,
//         backgroundColor: '#fff',
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     flatListContent: {
//         paddingBottom: 80, 
//     },
//     columnWrapper: {
//         justifyContent: 'space-between',
//     },
//     item: {
//         alignItems: 'center',
//         width: '48%',
//         marginBottom: 16,
//         borderRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: '#f8f8f8',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 4,
//     },
//     image: {
//         width: '100%',
//         height: Dimensions.get('window').width * 0.45,
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 8,
//         padding: 8,
//         textAlign: 'center',
//     },
//     pagination: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '80%',
//         marginTop: 16,
//     },
//     pageButton: {
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         backgroundColor: '#007bff',
//         borderRadius: 8,
//     },
//     pageButtonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     pageButtonDisabled: {
//         backgroundColor: '#cccccc',
//     },
//     fixedButton: {
//         position: 'absolute',
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         backgroundColor: 'blue',
//         bottom: '10%',
//         right: '10%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonTitle: {
//         fontSize: 45,
//         color: 'white',
//         textAlign: 'center',
//         lineHeight: 60, 
//     },
// });

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
