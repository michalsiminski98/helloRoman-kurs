/* eslint-disable prettier/prettier */
import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem.js/UsersListItem';
import { users } from 'data/users';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  margin: 30px 0;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

// function UsersList() {
//   return (
//     <Wrapper>
//       <ul>
//         {users.map((userData, i) => (
//           <UsersListItem index={i} key={userData.name} userData={userData} />
//         ))}
//       </ul>
//     </Wrapper>
//   );
// }


class UsersList extends React.Component{

  state= {
    users,
  }

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter(user => user.name !== name);
    this.setState({users: filteredUsers});
  }

  render() {
    return(
      <Wrapper>
        <ul>
          {this.state.users.map((userData, i) => (
            <UsersListItem deleteUser={this.deleteUser} index={i} key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    )
  }
}


export default UsersList;
