
import { useState } from 'react';
import service from './DummyService';

export default useResultViewModel = () => {
    const [page, setPage] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const results = service.getResults(page);
    const totalPages = service.getTotalPages();

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
