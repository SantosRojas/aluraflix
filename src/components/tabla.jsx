import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Colors } from '../colors';
import { useCategoriesContext, useUpdateCategoriesContext } from '../ContexProvider';

// Componente reutilizable para la fila de encabezado
const TableHeader = ({ headers }) => {
  return (
    <TableHead style={{ borderBottom: `.3rem solid ${Colors.primary}` }}>
      <TableRow>
        {headers.map((header, index) => (
          <TableCell
            key={index}
            style={{
              color: Colors.graylighter,
              fontWeight: 'bold', // Hace que el texto sea negritas (bold)
            }}
            align="center"
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

// Componente reutilizable para una fila de datos
const DataRow = ({ rowData, handleEdit, handleDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDeleteClick = () => {
    handleDelete(rowData.id);
    setOpenDialog(false);

  };

  return (
    <TableRow key={rowData.id}>
      <TableCell align="center" style={{ color: Colors.graylighter, borderBottom: "none" }}>
        {rowData.label}
      </TableCell>
      <TableCell align="center" style={{ color: Colors.graylighter, borderBottom: "none" }}>
        {rowData.description}
      </TableCell>
      <TableCell align="center" style={{ display: "flex", gap: "1rem", justifyContent: "space-around", borderBottom: "none" }}>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => handleEdit(rowData.id)}
        >
          Editar
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleClickOpenDialog}
        >
          Eliminar
        </Button>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirmación</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              ¿Estás seguro de que deseas eliminar este elemento?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button  variant="contained" onClick={handleCloseDialog} color="primary">
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleDeleteClick} color="primary" autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

const DataTable = () => {

  const categories = useCategoriesContext()
  const updateCategories = useUpdateCategoriesContext()

  const handleEdit = (id) => {
    console.log(`Editar elemento con ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar elemento con ID: ${id}`);
    // Filtra la lista de datos para eliminar el elemento con el ID correspondiente
    const updatedData = categories.filter((item) => item.id !== id);

    // Actualiza el estado con la nueva lista de datos
    updateCategories(updatedData);
  };

  const tableHeaders = ["Nombre", "Descripción", "Acciones"];

  return (
    <TableContainer component={Paper} style={{ width: "90%", margin: '2rem auto', backgroundColor: "transparent" }}>
      <Table style={{ borderRadius: "1rem", backgroundColor: Colors.blackmedium }}>
        <TableHeader headers={tableHeaders} />
        <TableBody>
          {categories.map((rowData) => (
            <DataRow
              key={rowData.id}
              rowData={rowData}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
