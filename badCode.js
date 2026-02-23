function processUser(user) {
  var unusedVariable = 123; // unused variable

  if (user == null) {
    console.log("No user");
  } else {
    if (user.age > 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
  }

  if (user == null) { // duplicate condition
    console.log("Still no user");
  }

  return true;
}

processUser(null);
