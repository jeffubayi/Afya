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
import { gql, useQuery } from "@apollo/client";
//query
const GET_STAFF = gql`
  query {
    getAllStaff {
      id
      name
      efficientDelta
      delta
      efficiency
      reports
    }
  }
`;

const StaffList: React.FC = () => {
  const { data, loading, error } = useQuery(GET_STAFF);

  if (loading) return <p>loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  const rows = data.getAllStaff;

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
            <TableRow style={styles.coloredText} key={row.id}>
              <TableCell style={styles.table}>{row.id}.</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={styles.table} align="left">
                {row.efficientDelta}
              </TableCell>
              <TableCell style={styles.table}>
                {row.efficientDelta}
                {row.delta}
              </TableCell>
              <TableCell>
                <ProgressLabel variant="determinate" value={row.efficiency} />
              </TableCell>
              <TableCell>
                <ProgressLabel variant="determinate" value={row.reports} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);
};
export default  StaffList;
