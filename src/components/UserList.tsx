import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {User} from '../types/User';

const UserList = () => {
  const searchResults = useSelector((state: any) => state.user.searchResults);
  const searchedUser = useSelector((state: any) => state.user.searchedUser);

  // Sort the search results by bananas
  const sortedResults =
    searchResults && searchResults.length > 0
      ? [...searchResults].sort((a: User, b: User) => b.bananas - a.bananas)
      : [];

  // Get top 10 or include searched user if not in top 10
  const topResults = sortedResults.slice(0, 10);
  const userIndex = sortedResults.findIndex(
    (user: User) => user.name === searchedUser,
  );

  if (searchedUser && userIndex > 9) {
    topResults[9] = sortedResults[userIndex];
  }
  useEffect(() => {}, [searchResults]);

  return (
    <FlatList
      data={sortedResults}
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
