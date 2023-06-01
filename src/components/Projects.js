import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const accessToken = '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';

        const response = await axios.get('https://api.github.com/users/Maximoe2588/repos', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setRepositories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;



//'Bearer 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'