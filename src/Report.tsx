import React from 'react';
import Axios from 'axios';
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

interface RowData {
  [key: string]: {
    total: number;
    month: number;
    week: number;
  };
}

export const Report = () => {
  const classes = useStyles();
  const [data, setData] = React.useState<RowData>({});

  React.useEffect(() => {
    const host = process.env.REACT_APP_API || '';
    Axios.get(host).then((response) => {
      setData(response.data.data.attributes);
    });
  }, []);

  const titleCase = (s: string) => {
    return s[0].toUpperCase() + s.slice(1);
  };

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
            {Object.keys(data).map((key) => (
              <StyledTableRow key={key}>
                <StyledTableCell component="th" scope="row">
                  {titleCase(key)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data[key].total}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data[key].month}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {data[key].week}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Report;
