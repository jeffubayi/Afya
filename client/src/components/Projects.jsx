import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";
import { Typography } from "@mui/material";
import styles from "./styles";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div>
          <Typography
            variant="button"
            display="block"
            color="textSecondary"
            style={styles.head}
          >
            Visits
          </Typography>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Visits</p>
      )}
    </>
  );
}
