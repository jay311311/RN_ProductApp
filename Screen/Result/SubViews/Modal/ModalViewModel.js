import { useState } from 'react';
import { useFirestore } from '../../../../Service/Firestore/FirestoreContext'; 
// import DataService from '../../DataService';

export default useModalViewModel = () => {
    const {addDocument} = useFirestore()
    // const {initialResult} = DataService()

    const [brandValue, setBrandValue] = useState('');
    const [modelValue, setModelValue] = useState('');
    const [colorValue, setColorValue] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [condition, setCondition] = useState('');
    const [purchaseReceipt, setPurchaseReceipt] = useState('');
    const [photos, setPhotos] = useState("http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_3.png");
    const [description, setDescription] = useState('');

    const handleSave = async () => {
        try {
            await addDocument(brandValue, modelValue, colorValue, size, gender, condition, purchaseReceipt, photos, description);
            resetForm();
            // initialResult()
        } catch (error) {
            console.error('Error saving new item:', error);
            throw error;
        }
    };

    const resetForm = () => {
        setBrandValue('');
        setModelValue('');
        setColorValue('');
        setSize('');
        setGender('');
        setCondition('');
        setPurchaseReceipt('');
        setPhotos("http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_3.png");
        setDescription('');
    };


    return {
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
    };
};

