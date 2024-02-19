import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const usePagination = () => {
  const contacts = useSelector((state) => {
    return state.contactObj.contacts;
  });
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const dataLimit = 5;
  const indexOfLast = page * dataLimit;
  const indexOfFirst = indexOfLast - dataLimit;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (contacts) {
      setPageData(contacts.slice(indexOfFirst, indexOfLast));
    }
  }, [indexOfFirst, indexOfLast, contacts, page]);

  return { contacts, pageData, handlePageChange, dataLimit, page };
};
