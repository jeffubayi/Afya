import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";
import { GET_CLIENTS } from "../queries/clientQueries";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import AddClientModal from "./AddClientModal";

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <TableContainer component={Paper} sx={{backgroundColor:"white"}}>

      {!loading && !error && (
        <Table sx={{ minWidth: 650 }} size="small"  aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Staff Name</TableCell>
              <TableCell>Efficiency Delta</TableCell>
              <TableCell>NPS Delta</TableCell>
              <TableCell>Efficiency</TableCell>
              <TableCell align="right">Reported Issues</TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {data.clients.length > 0 ? (
          <TableBody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
             {/* < AddClientModal/> */}
          </TableBody>
          ) : (
            < AddClientModal/>
          )}
        </Table>
      )}
    </TableContainer>
  );
}
