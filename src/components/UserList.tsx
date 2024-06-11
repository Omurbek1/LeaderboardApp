import React from 'react';
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {User} from '../types/User';
const UserList = () => {
  const users = useSelector((state: any) => state.user.users);
  const searchedUser = useSelector((state: any) => state.user.searchedUser);

  const usersArray = Object.values(users) as User[];

  // Sort the users array
  const sortedUsers = usersArray.sort(
    (a: any, b: any) => b.bananas - a.bananas,
  );

  const topUsers = sortedUsers.slice(0, 10);
  const userIndex = sortedUsers.findIndex(
    (user: any) => user.name === searchedUser,
  );

  console.log(searchedUser, userIndex);
  if (userIndex === -1 && searchedUser) {
    Alert.alert(
      'This user name does not exist! Please specify an existing user name!',
    );
  }

  if (userIndex > 9) {
    topUsers[9] = sortedUsers[userIndex];
  }

  return (
    <FlatList
      data={sortedUsers}
      style={styles.container}
      keyExtractor={(item: User) => item.uid}
      renderItem={({item, index}) => (
        <View
          style={[styles.item, item.name === searchedUser && styles.highlight]}>
          <Text>
            {index + 1}. {item.name}
          </Text>
          <Text>{item.bananas}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  highlight: {
    backgroundColor: 'yellow',
  },
});

export default UserList;
