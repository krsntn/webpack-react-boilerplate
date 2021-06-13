import { useState, useEffect } from 'react';
// import styles from 'Styles/index.module.scss';

function flattenObj(obj) {
  let newObj = {};

  if (obj) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        newObj = { ...newObj, ...flattenObj(obj[key]) };
      } else {
        newObj[key] = obj[key] || null;
      }
    });
  }

  return newObj;
}

const Page1 = () => {
  const [users, setUsers] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then((res) => res.json())
      .then((data) => setUsers(data.results.map((item) => flattenObj(item))));
  }, []);

  function sorting(sortKey, list) {
    if (sortKey) {
      const newUsers = list.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1;
        if (a[sortKey] > b[sortKey]) return 1;
        return 0;
      });
      setUsers(newUsers);
    }
  }

  function getFilterList(list) {
    if (searchValue) {
      return list.filter((row) =>
        JSON.stringify(row).toLowerCase().includes(searchValue),
      );
    }
    return list;
  }

  return (
    <div className="App">
      {/* {users && 
        <pre>{JSON.stringify(users, undefined, 2)}</pre>
      } */}
      <div>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      {users && (
        <table>
          <thead>
            <tr>
              {Object.keys(users[0]).map((key) => (
                <th
                  key={key}
                  onClick={() =>
                    sorting(key, JSON.parse(JSON.stringify(users)))
                  }>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getFilterList(users).map((user, index) => (
              <tr key={index}>
                {Object.keys(user).map((key) => (
                  <td key={key}>{user[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Page1;
