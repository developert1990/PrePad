import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePagination } from "../hooks";

import Pagination from "@mui/material/Pagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { PrePadDeleteModal } from "./PrePadDeleteModal";

export const PrePadTable = ({ headers }) => {
  const { contacts, dataLimit, handlePageChange, page, pageData } = usePagination();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState("");

  const handleOpen = (id) => {
    setSelectedContactId(id);
    setOpen(true);
  };

  return (
    <div id="prepad-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header) => {
                return (
                  <TableCell align="center" key={header.field}>
                    {header.headerName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {contacts.length === 0 ? (
            <tbody>
              <tr>
                <td className="no-data-message" colSpan="5">
                  No data here..
                </td>
              </tr>
            </tbody>
          ) : (
            pageData.map((contact, index) => {
              const { id, email, firstName, lastName } = contact;
              return (
                <TableBody key={id}>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center" component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center"> {email}</TableCell>
                    <TableCell align="center"> {firstName}</TableCell>
                    <TableCell align="center"> {lastName}</TableCell>
                    <TableCell align="right">
                      <DeleteIcon className="delete-contact" onClick={() => handleOpen({ id })} />
                      <EditIcon className="edit-contact" onClick={() => navigate(`/edit?contactId=${id}`)} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })
          )}
        </Table>
      </TableContainer>
      <div className="pagination-container">
        <Pagination className="pagination" count={Math.ceil(contacts.length / dataLimit)} color="primary" onChange={handlePageChange} page={page} />
      </div>
      <PrePadDeleteModal open={open} setOpen={setOpen} pageData={pageData} page={page} handlePageChange={handlePageChange} selectedContactId={selectedContactId} />
    </div>
  );
};
