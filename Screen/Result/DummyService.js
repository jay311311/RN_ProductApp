import { useFirestore } from '../../Service/Firestore/FirestoreContext';
import { useState, useEffect, useCallback } from "react";

export default FireStoreService = () => {
    const { getCollection, addDocument } = useFirestore();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCollection();
            setResult(data);
        };
        fetchData();
    }, [getCollection]);

    let pageStandard = 10;
    // var response = getCollection()

    // const initialResult = () => {
    //     return result;
    // };
    const getResults = useCallback((page, pageStandard = 10) => {
        const start = page * pageStandard;
        const end = start + pageStandard;
        return result.slice(start, end);
      }, [result]);
    
      const getTotalPages = useCallback((pageStandard = 10) => {
        return Math.ceil(result.length / pageStandard);
      }, [result]);

    // const getResults = (page, pageStandard = 10) => {
    //     const start = page * pageStandard;
    //     const end = start + pageStandard;
    //     return result.slice(start, end);
    // };

    // const getTotalPages = () => {
    //     return Math.ceil(result.length / this.pageStandard);
    // }
    const initialResult = async () => {
        const data = await getCollection();
        setResult(data);
        return data;
      };

    // const setResults = () => {
    //     return addDocument()
    // }

    return {
        initialResult,
    getResults,
    getTotalPages,
    addDocument,
    };
}


// class DummyService {
//     static results = [
//         { resultId: 0, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 1, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 2, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 3, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 4, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 5, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 6, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 7, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 8, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 9, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "1" },
//         { resultId: 10, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 11, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 12, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 13, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 14, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 15, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 16, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 17, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 18, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 19, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 20, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" },
//         { resultId: 21, thumbnail: "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png", title: "2" }
//     ]
//     static pageSize = 10;

//     static getResults = (page) => {
//         const start = page * this.pageSize;
//         const end = start + this.pageSize;
//         return this.results.slice(start, end);
//     }

//     static getTotalPages() {
//         return Math.ceil(this.results.length / this.pageSize);
//     }
// }

// export default DummyService