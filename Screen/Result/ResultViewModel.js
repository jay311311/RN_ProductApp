
import { useState, useEffect } from 'react';

import FireStoreService from './DummyService';

export default useResultViewModel = () => {
    const { getResults, getTotalPages, initialResult } = FireStoreService();
    const [page, setPage] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    // var results = []
    // const totalPages = getTotalPages();

  // Fetch initial data
  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await initialResult(); // Ensure to await the initial result
      setResults(getResults(0));
      setTotalPages(getTotalPages());
      console.log(`Fetched data: ${JSON.stringify(data)}`);
    };
    fetchInitialData();
  }, []);

  // Fetch data for current page
  useEffect(() => {
    setResults(getResults(page));
  }, [page]);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const nextPage = () => {
        if (page < totalPages - 1) {
            const newPage = page + 1;
            setPage(newPage);
        }
    };

    const prevPage = () => {
        if (page > 0) {
            const newPage = page - 1;
            setPage(newPage);
        }
    };

    return {
        results,
        nextPage,
        prevPage,
        toggleModal,
        isModalVisible,
        hasNextPage: page < totalPages - 1,
        hasPrevPage: page > 0,
    };
}
