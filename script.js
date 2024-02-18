const userName = document.querySelector(".enterName");
const userEmail = document.querySelector(".enterEmail");
const url = document.querySelector(".url");
const create1 = document.querySelector(".create");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const cards = document.querySelector(".crid");
const modal = document.querySelector(".modal");

console.log(enterEmail);
console.log(enterName);
console.log(url);
console.log(create1);
console.log(openBtn);
console.log(closeBtn);

function createElem() {
  cards.innerHTML = "";
  let task = JSON.parse(localStorage.getItem("task")) || [];
  task.map((el) => {
    cards.innerHTML += `
     <div class="neim">
         <img src="${el.url}" alt="img">
         <div class="user_data">
             <p>Name : ${el.enterName}</p>
             <p>Email : ${el.enterEmail}</p>
          </div>
          <button class='del-btn'>Delete</button>
      </div>
        `;
  });
  const del_btn = document.querySelectorAll('.del-btn')
  deleteBtn(del_btn, task)
}


create.addEventListener("click", () => {
  if (
    enterEmail.value.trim() === "" ||
    enterName.value.trim() === "" ||
    url.value.trim() === ""
  ) {
    alert("error");
  } else {
    let task = JSON.parse(localStorage.getItem("task")) || [];
    let newTask = {
      id: 2,
      enterName: enterName.value,
      enteremail: enterEmail.value,
      url: url.value,
    };

    let res = [...task, newTask];
    localStorage.setItem("task", JSON.stringify(res));
    createElem();
  }

  enterName.value = "";
  enterEmail.value = "";
  url.value = "";
});

function deleteBtn(del_btn, task) {
    del_btn.forEach((elem,idx) => {
        elem.addEventListener('click', () => {
            task = task.filter((el, id) => idx !== id)
            localStorage.setItem('task', JSON.stringify(task))
            createElem()
        })
      })
}


createElem()

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

openBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})






