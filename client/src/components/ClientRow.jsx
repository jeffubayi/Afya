import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';
import {
  TableRow,
  TableCell,
} from "@mui/material";
import ProgressLabel  from "./ProgressLabel";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <TableRow>
      <TableCell>{client.name}</TableCell>
      <TableCell>1,2 +1.3</TableCell>
      <TableCell>1,2 +1.3</TableCell>
      <TableCell>
                <ProgressLabel variant="determinate" value={5} />
              </TableCell>
              <TableCell>
                <ProgressLabel variant="determinate" value={6} />
              </TableCell>
      <TableCell>
        <button className='btn btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </TableCell>
    </TableRow>
  );
}
