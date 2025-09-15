import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
const [project, setProject] = React.useState([]);

useEffect(() => {
  // Simulate fetching data
  const fetchProjects = async () => {
    const data = [
      { id: 1, name: 'Project A' },
      { id: 2, name: 'Project B' },
    ];
    setProject(data);
  };
  fetchProjects();
}, []);


  return (
    <>
      <div>Welcome to the dashboard, you have been logged in</div>
      <div className="product-grid">
        {project &&
          project.map((item) => (
        <div key={item.id} className="product-item">
          <Link to={`/project/${item.id}`}>{item.name}</Link>
        </div>
          ))}
      </div>
    </>
  )
}

export default Dashboard