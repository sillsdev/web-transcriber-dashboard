import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `calc(100vh - 65px)`,
      display: 'flex',
    },
    paper: {
      [theme.breakpoints.up('md')]: {
        width: 750,
      },
      margin: 'auto',
    },
    table: {
      minWidth: 450,
    },
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  })
);

function createData(
  name: string,
  total: number,
  lastMonth: number,
  lastWeek: number
) {
  return { name, total, lastMonth, lastWeek };
}

const rows = [
  createData('Projects', 159, 20, 10),
  createData('Training Projects', 15, 5, 1),
  createData('Scripture Projects', 140, 25, 20),
  createData('Plans', 305, 103, 55),
  createData('Passages', 1300, 500, 100),
  createData('Transcriptions', 1000, 400, 90),
  createData('Paratext Sync', 403, 130, 45),
];

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export const Report = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Metric</StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
              <StyledTableCell align="right">Last Month</StyledTableCell>
              <StyledTableCell align="right">Last Week</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.total}</StyledTableCell>
                <StyledTableCell align="right">{row.lastMonth}</StyledTableCell>
                <StyledTableCell align="right">{row.lastWeek}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Report;
