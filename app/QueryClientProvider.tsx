import React, { useEffect, useState } from "react";
import axios from "axios";

export default function QueryClientProvider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("http://localhost:3000/api/isuue");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
         <h1>Lenth data : <span> {data.length}</span></h1>
          {data.map((item:any) => (
            <li key={item.id}>{item.name}</li>

          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
