import React from 'react';
import { StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';

function ModalView({ isVisible, onClose }) {
    const [brand, setBrand] = React.useState('Louis Vuitton');
    const [model, setModel] = React.useState('Bag Cousin BB');
    const [color, setColor] = React.useState('Black');
    const [size, setSize] = React.useState('Large');
    const [gender, setGender] = React.useState('Woman');
    const [condition, setCondition] = React.useState('Used');
    const [purchaseReceipt, setPurchaseReceipt] = React.useState('No');
    const [description, setDescription] = React.useState('');

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={handleClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>나는 모달입니다</Text>
                    <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

//     return (
//         <Modal
//             animationType="slide"
//             transparent={true}
//             visible={isVisible}
//             onRequestClose={onClose}
//         >
//             <View style={styles.modalContainer}>
//                 <View style={styles.modalContent}>
//                     <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//                         <Text style={styles.closeButtonText}>X</Text>
//                     </TouchableOpacity>
//                     <ScrollView>
//                         <Text style={styles.title}>Add new item</Text>

//                         <Text style={styles.label}>Brand *</Text>
//                         <Picker
//                             selectedValue={brand}
//                             onValueChange={(itemValue) => setBrand(itemValue)}
//                             style={styles.picker}
//                         >
//                             <Picker.Item label="Louis Vuitton" value="Louis Vuitton" />
//                             {/* Add more brands here */}
//                         </Picker>

//                         <Text style={styles.label}>Model *</Text>
//                         <Picker
//                             selectedValue={model}
//                             onValueChange={(itemValue) => setModel(itemValue)}
//                             style={styles.picker}
//                         >
//                             <Picker.Item label="Bag Cousin BB" value="Bag Cousin BB" />
//                             {/* Add more models here */}
//                         </Picker>

//                         <Text style={styles.modelHelp}>
//                             *If you can't find the reference of your bag,{' '}
//                             <Text style={styles.link}>click here</Text>
//                         </Text>

//                         <Text style={styles.label}>Color *</Text>
//                         <Picker
//                             selectedValue={color}
//                             onValueChange={(itemValue) => setColor(itemValue)}
//                             style={styles.picker}
//                         >
//                             <Picker.Item label="Black" value="Black" />
//                             {/* Add more colors here */}
//                         </Picker>

//                         <Text style={styles.label}>Size</Text>
//                         <RadioButtonGroup
//                             containerStyle={styles.radioGroup}
//                             selected={size}
//                             onSelected={(value) => setSize(value)}
//                             radioBackground="black"
//                         >
//                             <RadioButtonItem value="Small" label={<Text>Small</Text>} />
//                             <RadioButtonItem value="Medium" label={<Text>Medium</Text>} />
//                             <RadioButtonItem value="Large" label={<Text>Large</Text>} />
//                         </RadioButtonGroup>

//                         <Text style={styles.label}>Gender</Text>
//                         <RadioButtonGroup
//                             containerStyle={styles.radioGroup}
//                             selected={gender}
//                             onSelected={(value) => setGender(value)}
//                             radioBackground="black"
//                         >
//                             <RadioButtonItem value="Woman" label={<Text>Woman</Text>} />
//                             <RadioButtonItem value="Man" label={<Text>Man</Text>} />
//                             <RadioButtonItem value="Unisex" label={<Text>Unisex</Text>} />
//                         </RadioButtonGroup>

//                         <Text style={styles.label}>Condition</Text>
//                         <RadioButtonGroup
//                             containerStyle={styles.radioGroup}
//                             selected={condition}
//                             onSelected={(value) => setCondition(value)}
//                             radioBackground="black"
//                         >
//                             <RadioButtonItem value="New" label={<Text>New</Text>} />
//                             <RadioButtonItem value="Used" label={<Text>Used</Text>} />
//                         </RadioButtonGroup>

//                         <Text style={styles.label}>Purchase receipt</Text>
//                         <RadioButtonGroup
//                             containerStyle={styles.radioGroup}
//                             selected={purchaseReceipt}
//                             onSelected={(value) => setPurchaseReceipt(value)}
//                             radioBackground="black"
//                         >
//                             <RadioButtonItem value="Yes" label={<Text>Yes</Text>} />
//                             <RadioButtonItem value="No" label={<Text>No</Text>} />
//                         </RadioButtonGroup>

//                         <Text style={styles.label}>Add photos</Text>
//                         <View style={styles.photoContainer}>
//                             <Image
//                                 source={{
//                                     uri: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png',
//                                 }}
//                                 style={styles.photo}
//                             />
//                             <Image
//                                 source={{
//                                     uri: 'http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png',
//                                 }}
//                                 style={styles.photo}
//                             />
//                             <TouchableOpacity style={styles.photoButton}>
//                                 <Text style={styles.photoButtonText}>+</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={styles.photoButton}>
//                                 <Text style={styles.photoButtonText}>+</Text>
//                             </TouchableOpacity>
//                         </View>

//                         <Text style={styles.label}>Description</Text>
//                         <TextInput
//                             style={styles.descriptionInput}
//                             placeholder="Enter brief description"
//                             multiline={true}
//                             value={description}
//                             onChangeText={setDescription}
//                         />

//                         <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
//                             <Text style={styles.saveButtonText}>Save</Text>
//                         </TouchableOpacity>
//                     </ScrollView>
//                 </View>
//             </View>
//         </Modal>
//     );
// };
// const styles = StyleSheet.create({
//     modalContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       borderRadius: 10,
//       padding: 20,
//       width: '90%',
//       maxHeight: '90%',
//     },
//     closeButton: {
//       alignSelf: 'flex-end',
//     },
//     closeButtonText: {
//       fontSize: 18,
//       fontWeight: 'bold',
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: 20,
//     },
//     label: {
//       fontSize: 16,
//       marginVertical: 10,
//     },
//     picker: {
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       padding: 10,
//     },
//     modelHelp: {
//       color: '#888',
//       fontSize: 12,
//       marginVertical: 5,
//     },
//     link: {
//       color: '#2196F3',
//     },
//     radioGroup: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     photoContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//     },
//     photo: {
//       width: 70,
//       height: 70,
//       borderRadius: 10,
//     },
//     photoButton: {
//       width: 70,
//       height: 70,
//       borderRadius: 10,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     photoButtonText: {
//       fontSize: 36,
//       color: '#ccc',
//     },
//     descriptionInput: {
//       borderWidth: 1,
//       borderColor: '#ccc',
//       borderRadius: 5,
//       padding: 10,
//       height: 100,
//     },
//     saveButton: {
//       backgroundColor: 'black',
//       padding: 15,
//       borderRadius: 10,
//       alignItems: 'center',
//       marginTop: 20,
//     },
//     saveButtonText: {
//       color: 'white',
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//   });
  
//   export default ModalView;
  

}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5, // Android elevation to lift the modal
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ModalView;