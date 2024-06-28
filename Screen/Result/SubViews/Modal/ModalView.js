import React from 'react';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import useModalViewModel from './ModalViewModel';

const ModalView = ({ navigation }) => {
    const [brandOpen, setBrandOpen] = useState(false);
    const [branditems, setBrandItems] = useState([
        { label: 'Spain', value: 'spain' },
        { label: 'Madrid', value: 'madrid' },
    ]);

    const [modelOpen, setModelOpen] = useState(false);
    const [modelItems, setModelItems] = useState([
        { label: 'Spain', value: 'spain' },
        { label: 'Madrid', value: 'madrid' },
    ]);
    const [colorOpen, setColorOpen] = useState(false);
    const [colorItems, setcColorItems] = useState([
        { label: 'Spain', value: 'spain' },
        { label: 'Madrid', value: 'madrid' },
    ]);

    const {
        brandValue, setBrandValue,
        modelValue, setModelValue,
        colorValue, setColorValue,
        size, setSize,
        gender, setGender,
        condition, setCondition,
        purchaseReceipt, setPurchaseReceipt,
        photos, setPhotos,
        description, setDescription,
        handleSave,
    } = useModalViewModel();

    const onSave = () => {
        handleSave();
        // onSaveSuccess(newItem);
        onClose();
    };

    const onClose = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.modalContainer}>
            <ScrollView contentContainerStyle={styles.modalContent}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Add new item</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose} >
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.contentTitle}>Brand *</Text>
                    <View>
                        <DropDownPicker
                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                            }}
                            zIndex={3000}
                            zIndexInverse={1000}
                            open={brandOpen}
                            value={brandValue}
                            items={branditems}
                            setOpen={setBrandOpen}
                            setValue={setBrandValue}
                            setItems={setBrandItems}
                            theme="LIGHT"
                            multiple={false}
                            mode="SIMPLE"
                        />
                    </View>
                    <Text style={styles.contentTitle}>Model *</Text>
                    <DropDownPicker
                        listMode="SCROLLVIEW"
                        scrollViewProps={{
                            nestedScrollEnabled: true,
                        }}
                        zIndex={2000}
                        zIndexInverse={2000}
                        open={modelOpen}
                        value={modelValue}
                        items={modelItems}
                        setOpen={setModelOpen}
                        setValue={setModelValue}
                        setItems={setModelItems}
                        theme="LIGHT"
                        multiple={false}
                        mode="SIMPLE"
                    />
                    <Text style={styles.contentTitle}>Color *</Text>
                    <DropDownPicker
                        listMode="SCROLLVIEW"
                        scrollViewProps={{
                            nestedScrollEnabled: true,
                        }}
                        zIndex={1000}
                        zIndexInverse={1000}
                        open={
                            colorOpen

                        }
                        value={colorValue}
                        items={colorItems}
                        setOpen={setColorOpen}
                        setValue={setColorValue}
                        setItems={setcColorItems}
                        theme="LIGHT"
                        multiple={false}
                        mode="SIMPLE"
                    />
                </View>
                <Text style={styles.contentTitle}>Size *</Text>
                <View style={styles.radioGroup}>
                    {['Small', 'Medium', 'Large'].map(sizeOption => (
                        <TouchableOpacity
                            key={sizeOption}
                            onPress={() => setSize(sizeOption)}>
                            <Text style={size === sizeOption ? styles.selectedOption : styles.option}>{sizeOption}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.contentTitle}>Gender *</Text>
                <View style={styles.radioGroup}>
                    {['Woman', 'Man', 'Unisex'].map(genderOption => (
                        <TouchableOpacity
                            key={genderOption}
                            onPress={() => setGender(genderOption)}>
                            <Text style={gender === genderOption ? styles.selectedOption : styles.option}>{genderOption}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.contentTitle}>Condition *</Text>
                <View style={styles.radioGroup}>
                    {['New', 'Used'].map(conditionOption => (
                        <TouchableOpacity
                            key={conditionOption}
                            onPress={() => setCondition(conditionOption)}>
                            <Text style={condition === conditionOption ? styles.selectedOption : styles.option}>{conditionOption}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.contentTitle}>Purchase receipt *</Text>
                <View style={styles.radioGroup}>
                    {['Yes', 'No'].map(receiptOption => (
                        <TouchableOpacity
                            key={receiptOption}
                            onPress={() => setPurchaseReceipt(receiptOption)}>
                            <Text style={purchaseReceipt === receiptOption ? styles.selectedOption : styles.option}>{receiptOption}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.contentTitle}>Add photos</Text>
                <View style={styles.photoContainer}>
                    {/* {photos.map((photo, index) => ( */}
                    <Image
                        source={{ uri: photos }}
                        style={styles.photo} />
                    {/* ))} */}
                    <TouchableOpacity
                        style={styles.addPhoto}
                        onPress={() => {
                            /*TODO: choose photo from Gallery */
                            // setPhotos("http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_4.png")
                        }}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.contentTitle}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    value={description}
                    onChangeText={(text) => { setDescription(text) }}
                    multiline
                />
                <TouchableOpacity style={styles.saveButton}
                    onPress={onSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 60,
        width: Dimensions.get('window').width,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 10,
    },
    closeButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentTitle: {
        marginTop: 10,
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    textArea: {
        height: 100,
    },
    radioGroup: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    option: {
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    selectedOption: {
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#ddd',
    },
    photoContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10
    },
    photo: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
    },
    addPhoto: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default ModalView;

