import React from 'react';
import { StyleSheet, FlatList, Text, View, Image, Dimensions, TouchableOpacity, RefreshControl } from 'react-native';
import ResultViewModel from "./ResultViewModel";
import { useCallback, useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default ResultView = ({ navigation }) => {
    const ListCell = ({ thumbnail, id }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Detail')}>
            <View>
                <Image
                    source={{ uri: thumbnail }}
                    style={styles.image} />
            </View>
        </TouchableOpacity>
    );

    const {
        results,
        nextPage,
        prevPage,
        goToPage,
        isResfesh,
        onRefresh,
        hasNextPage,
        hasPrevPage,
        totalPages,
        currentPage } = ResultViewModel();

    const renderItem = useCallback(
        ({ item }) => <ListCell
            title={item.resultId}
            thumbnail={item.thumbnail} />, [results]
    );
    const keyExtractor = useCallback(
        (item) => item.id, [results]
    );

    const pageNumbers = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => goToPage(i)}
                    style={styles.pageNumber}>
                    <Text style={i === currentPage ? styles.currentPage : styles.pageText}>{i}</Text>
                </TouchableOpacity>
            );
        }
        return pages;
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={results}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    refreshControl={
                        <RefreshControl refreshing={isResfesh} onRefresh={onRefresh} />}
                />
                <TouchableOpacity
                    style={styles.fixedButton}
                    onPress={() => { navigation.navigate('Modal') }}>
                    <Text style={styles.buttonTitle}>+</Text>
                </TouchableOpacity>
                <View style={styles.pagination}>
                    <TouchableOpacity
                        style={hasPrevPage ? styles.paginationBtn : styles.paginationBtnDisable}
                        onPress={prevPage} disabled={!hasPrevPage}>
                        <Text style={styles.paginationBtnText}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.pageNumbers}>{pageNumbers()}</View>
                    <TouchableOpacity
                        style={hasNextPage ? styles.paginationBtn : styles.paginationBtnDisable}
                        onPress={nextPage} disabled={!hasNextPage}>
                        <Text style={styles.paginationBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        alignItems: 'center',
        width: "50%",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    image: {
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').width * 0.45,
        borderRadius: 20,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 5,
    },
    paginationBtn: {
        backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: "center"
    },
    paginationBtnDisable: {
        backgroundColor: '#007bff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        justifyContent: "center",
        opacity: 0
    },
    paginationBtnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'medium',
        alignItems: "center",
        justifyContent: "center"
    },
    pageNumbers: {
        flexDirection: 'row',
    },
    pageNumber: {
        marginHorizontal: 4,
    },
    pageText: {
        fontSize: 30,
        color: '#007bff',
    },
    currentPage: {
        fontSize: 30,
        color: '#ff7bff',
    },
    fixedButton: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "#007bff",
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
    },
});
