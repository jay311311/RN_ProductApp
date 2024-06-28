import { useFirestore } from '../../Service/Firestore/FirestoreContext';
import { useState, useEffect, useCallback } from "react";

export default DataService = () => {
  const { getCollection } = useFirestore();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollection();
      setResult(data);
    };
    fetchData();
  }, []);

  const getResults = useCallback((page, pageStandard = 10) => {
    const start = page * pageStandard;
    const end = start + pageStandard;
    return result.slice(start, end);
  }, [result]);

  const getTotalPages = useCallback(async (pageStandard = 10) => {
    const data = await getCollection();
    return Math.ceil(data.length / pageStandard);
  }, [result]);

  const initialResult = useCallback(async () => {
    const data = await getCollection();
    setResult(data);
    return data.slice(0, 10);
  }, []);

  return {
    initialResult,
    getResults,
    getTotalPages,
  };
}
