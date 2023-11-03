import React, { useEffect, useState } from "react";
import axios from "axios";
import "../task/tablecss.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Main = () => {
  const [api, setApi] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setApi(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlerDelete = (del) => {
    const deldata = api.filter((item) => item.id !== del);
    setApi(deldata);
  };

  return (
    <div>
      <center>
        <h1>Fetching API</h1>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Delete cell</th>
            </tr>
          </thead>
          <tbody>
            {api.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "True" : "False"}</td>
                <td>
                  <DeleteOutlineOutlinedIcon
                    className="icon"
                    onClick={() => handlerDelete(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Main;
