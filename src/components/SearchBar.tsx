import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSearchedUser} from '../redux/actions';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchedUser(username));
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
    padding: 10,
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
