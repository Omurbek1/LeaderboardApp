import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import store from './redux/store';
import {setUsers} from './redux/actions';
import {loadUsers} from './utils/dataLoader';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import {SafeAreaView, StyleSheet} from 'react-native';
import {User} from './types/User';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const users: User[] = loadUsers();
    dispatch(setUsers(users));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <UserList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
