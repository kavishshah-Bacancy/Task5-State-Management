import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { MdModeEdit } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import Card from "@material-ui/core/Card";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
    minWidth: 275,
  },
});
function DisplayUsers({ users, onDelete, onEdit }) {
  const classes = useStyles();
  return (
    <Card>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>FirstName</StyledTableCell>
              <StyledTableCell align="right">Lastname</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Operations</StyledTableCell>
            </TableRow>
          </TableHead>
          {users.length !== 0 ? (
            <TableBody>
              {users.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.phone}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => onEdit(row.id)}
                      variant="contained"
                      color="primary"
                    >
                      <MdModeEdit />
                    </Button>
                    <Button
                      onClick={() => onDelete(row.id)}
                      variant="contained"
                      color="secondary"
                    >
                      <BsFillTrashFill />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          ) : (
            <StyledTableCell colSpan="3" align="right">
              <h3
                style={{
                  fontSize: "20px",
                  color: "lightseagreen",
                }}
              >
                Please Add some Users
              </h3>
            </StyledTableCell>
          )}
        </Table>
      </TableContainer>
    </Card>
  );
}

export default DisplayUsers;
