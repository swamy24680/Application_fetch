import React, { useState, useEffect } from 'react';
import './UserTable.css';
function UserTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Extract and filter the relevant columns
        const filteredData = data.users.map((user) => ({
          Sno: user.id,
          ProfilePic: user.image,
          Firstname: user.firstName,
          Lastname: user.lastName,
          Gender: user.gender,
          Email: user.email,
          Username: user.username,
          Domain: user.domain,
          IP: user.ip,
          University: user.university,
        }));
        setUsers(filteredData);
      });
  }, []);
  return (
    <div className='body'>
        <div >
            <h2>Dummy Data</h2>
            <div className='table'>
                <table >
                    <thead >
                    <tr>
                        <th id="id3">Sno</th>
                        <th id="id2">Profile Pic</th>
                        <th id="id3">First Name</th>
                        <th id="id3">Last Name</th>
                        <th id="id3">Gender</th>
                        <th id="id3">E-mail</th>
                        <th id="id3">Username</th>
                        <th id="id3">Domain</th>
                        <th id="id3">IP</th>
                        <th id="id4">University</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.Sno}>
                        <td>{user.Sno}</td>
                        <td className="profile-pic-cell" ><img src={user.ProfilePic} alt={`Profile of ${user.Firstname}`} /></td>
                        <td id="id1">{user.Firstname}</td>
                        <td id="id1">{user.Lastname}</td>
                        <td id="id1">{user.Gender}</td>
                        <td id="id1">{user.Email}</td>
                        <td id="id1">{user.Username}</td>
                        <td id="id1">{user.Domain}</td>
                        <td id="id1">{user.IP}</td>
                        <td id="id1">{user.University}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
export default UserTable;