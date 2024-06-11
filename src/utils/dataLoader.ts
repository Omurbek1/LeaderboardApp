import usersData from './leaderboard.json';

export const loadUsers = () => {
  return Object.values(usersData).map(user => ({
    uid: user.uid,
    name: user.name,
    bananas: user.bananas,
  }));
};
