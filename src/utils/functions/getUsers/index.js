export function getUser(users, userLogged) {
  if (!users || !Array.isArray(users)) return null;
  return users.filter((user) => user !== userLogged?.email)[0];
}
