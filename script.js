/*
switch (a= prompt("who is there?")){
    case "cancel": alert("canceled");
        break;
    case "other": alert("I dont know");
        break;

    case "admin": 
    switch(prompt("pass...")){
        case "cancel": alert("canceled");
            break;

        case "other": alert("wrong pass");
            break;

        case "themaster": alert("wellcome");
            break;
        default: alert("bye");
            break;

    }
    default:alert("ok bye");
        break;
}
*/





/*let user = prompt("Who's there?");

switch (user) {
  case null:
    alert("Canceled");
    break;

  case "Admin":
    let pass = prompt("Password?");
    switch (pass) {
      case null:
        alert("Canceled");
        break;

      case "TheMaster":
        alert("Welcome!");
        break;

      default:
        alert("Wrong password");
    }
    break;

  default:
    alert("I don't know you");
}
*/


let user = prompt("Who's there?");

if (user === null) {
  alert("Canceled");
} else if (user === "Admin") {
  let pass = prompt("Password?");
  if (pass === null) {
    alert("Canceled");
  } else if (pass === "TheMaster") {
    alert("Welcome!");
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don't know you");
}


