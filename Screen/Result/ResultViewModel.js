import { useState, useEffect } from 'react';
import DataService from './DataService';
import { useAuth } from '../../Service/Auth/AuthContext'

export default useResultViewModel = () => {
  const { getResults, getTotalPages, initialResult } = DataService();
  const { logout } = useAuth()
  const [page, setPage] = useState(0);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isResfesh, setIsRefresh] = useState(false)

  const fetchInitialData = async () => {
    const data = await initialResult();
    setResults(data);
    setTotalPages(await getTotalPages());
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getResults(page)
      setResults(data);
    };
    fetchData();
  }, [page]);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setPage(pageNumber - 1);
    setCurrentPage(pageNumber);
  };

  const onRefresh = () => {
    setIsRefresh(true)
    fetchInitialData();
    setTimeout(() => {
      setIsRefresh(false);
    }, 1000);
  }

  const handleLogout = () => {
    logout()
  }

  return {
    results,
    isResfesh,
    nextPage,
    prevPage,
    goToPage,
    onRefresh,
    handleLogout,
    hasNextPage: page < totalPages - 1,
    hasPrevPage: page > 0,
    totalPages,
    currentPage,
  };
}
