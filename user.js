async function createParseUser() {
    let user = new Parse.User();
    user.set("username", document.getElementById("username").value);
    user.set("email", document.getElementById("email").value);
    user.set("password", document.getElementById("password").value);
    user.set("telefone", document.getElementById("telefone").value);
    user.set("funcao", document.getElementById("funcao").value);
    try {
      user = await user.save();
      if (user !== null) {
        alert(
          `New object created with success! ObjectId: ${
            user.id
          }, ${user.get("username")}`
        );
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }
//   document.getElementById("createButton").addEventListener("click", async function () {
//     createParseUser();
//   });