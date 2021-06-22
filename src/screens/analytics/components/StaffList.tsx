import React from "react";
import {
  LinearProgress,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import styles from "../../../css/styles";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  food: number
) {
  return { name, calories, fat, carbs, protein, food };
}

const rows = [
  createData("Mercy Mukoya", 1, 6.0, 24, 40, 60),
  createData("Stefanie Tomsett", 2, 9.0, 37, 43, 10),
  createData("Kennedy Ayako", 3, 16.0, 24, 60, 30),
  createData("Faith kityo", 4, 3.7, 67, 43, 90),
];

export default function StaffList() {
  return (
    <TableContainer component={Paper}>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>
                <LinearProgress variant="determinate" value={row.protein} />
              </TableCell>
              <TableCell align="right">
                <LinearProgress variant="determinate" value={row.food} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
