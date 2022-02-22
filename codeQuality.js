// level {2}


/*

## Level 2

Re-write the below code to better code quality standards.
Hint: use modern ES6 syntax and reduce lines of code.

*/

async function getUsers() {
  let [user, Profile, p]  = await Promise.all(getUser(), getProfile(), getPosts());

  const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };

  return userProfile;
}


