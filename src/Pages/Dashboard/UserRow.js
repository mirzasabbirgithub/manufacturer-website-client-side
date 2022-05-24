import React from 'react';

const UserRow = ({ user }) => {
          const { email } = user;
          return (
                    <tr>
                              <th>1</th>
                              <th>{email}</th>
                              <th><button className='btn btn-secondary'>Make Admin</button></th>
                    </tr>
          );
};

export default UserRow;