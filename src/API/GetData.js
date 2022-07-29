import React, { useEffect, useState } from 'react';
import { Table, NavItem } from 'react-bootstrap';

function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser()
  }, []);
  function getUser() {
    fetch('http://localhost:3000/posts').then((result) => {
      result.json().then((response) => {
        setData(response);
      });
    });
  }
  function deleteUser(id) {
  
    fetch(`http://localhost:3000/posts/${id}`,{
        method:"Delete"
    }).then((result)=>{
        result.json().then((reponse)=>{
            getUser()
        })
    })
  }
  return (
    <div className='App'>
      <Table border={1}>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Author</td>
          <td>Action</td>
        </tr>
        {data.map((item, i) => (
          <tbody>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <button onClick={()=>deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Get;
