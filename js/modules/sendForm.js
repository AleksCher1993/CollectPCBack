export const sendForm = () => {
  let form = document.querySelector(".modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {};
    let formData = new FormData(form);
    formData.forEach((val, key) => {
      obj[key] = val;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Плохи дела!!!");
        }
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        obj = {};
        form.reset();
        form.classList.remove("active");
      });
  });
};
