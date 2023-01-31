
 class FormData {
  constructor() {
    this.data = [];
  }

  addData(value) {
    this.data = [...this.data, ...value];
    console.log(this.data);
  }

  getData() {
    return this.data;
  }

  sendData(event) {
    event.preventDefault();
    console.log("enviou");
    const data = JSON.stringify(this.data);
    localStorage.setItem("formData", data);
    console.log("Data saved in local storage");
  }

  getData() {
    const data = localStorage.getItem("formData");
    return console.log(data);
  }
}

// sections[1].style.display = "none";
// sections[2].style.display = "none";

const formData = new FormData();

formData.getData();

console.log(formData.getData());
const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  const select = section.querySelector("select");
  const button = section.querySelector("button");

  button.addEventListener("click", (event) => {
    formData.addData((i = select.value));
    if (section.nextElementSibling) {
      section.nextElementSibling.style.display = "block";
      section.style.display = "none";
    } else {
      formData.sendData(event);
    }
  });
}
