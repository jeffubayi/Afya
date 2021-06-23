import React from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import ProgressLabel from "../../../components/ProgressLabel";
import styles from "../../../css/styles";

function createData(
  name: string,
  staff: number,
  Edelta: number,
  Ndelta: number,
  efficiency: number,
  reported: number
) {
  return { name, staff, Edelta, Ndelta, efficiency, reported };
}

const rows = [
  createData("Mercy Mukoya", 1, 6, 24, 40, 60),
  createData("Stefanie Tomsett", 7, 9, 37, 43, 10),
  createData("Kennedy Ayako", 3, 9, 24, 60, 30),
  createData("Faith kityo", 4, 2, 67, 43, 90),
];

export default function StaffList() {
  return (
    <TableContainer component={Paper} style={styles.wrapper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Staff Name</TableCell>
            <TableCell>Efficiency Delta</TableCell>
            <TableCell>NPS Delta)</TableCell>
            <TableCell>Efficiency</TableCell>
            <TableCell align="right">Reported Issues</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={styles.coloredText} key={row.name}>
              <TableCell style={styles.table}>{row.staff}.</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={styles.table} align="left">
                {row.Edelta}
                {row.Edelta}
              </TableCell>
              <TableCell style={styles.table}>
                {row.Ndelta}
                {row.Edelta}
              </TableCell>
              <TableCell>
                <ProgressLabel variant="determinate" value={row.efficiency} />
              </TableCell>
              <TableCell>
                <ProgressLabel variant="determinate" value={row.reported} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
