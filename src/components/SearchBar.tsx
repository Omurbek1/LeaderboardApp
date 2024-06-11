import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchedUser, setSearchResults} from '../redux/actions';
import Fuse from 'fuse.js';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);

  const handleSearch = () => {
    dispatch(setSearchedUser(username));

    const fuse = new Fuse(users, {
      keys: ['name'],
      threshold: 0.3, // Adjust this to change fuzziness
    });

    const results = username
      ? fuse.search(username).map(result => result.item)
      : users;
    dispatch(setSearchResults(results));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    marginRight: 10,
    padding: 5,
    flex: 1,
  },
});

export default SearchBar;
