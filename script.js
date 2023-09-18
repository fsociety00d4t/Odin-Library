let btn = document.querySelector(".add");
let modal = document.querySelector(".modal");
let hidden = document.querySelector(".hidden");
let close = document.querySelector(".close");
let cards = document.querySelector(".cards");
let card = document.querySelector(".card");
let Total = document.getElementById("total");
let Read = document.getElementById("read");
let NotRead = document.getElementById("notRead");

let id = 0;
let total = 0;

btn.onclick = function () {
  hidden.style.display = "block";
};

close.onclick = function () {
  hidden.style.display = "none";
};

let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
  }
}

function addBookToLibrary() {
  id++;
  let title = document.getElementById("f_title").value;
  let author = document.getElementById("f_author").value;
  let pages = document.getElementById("f_pages").value;
  let status = document.getElementById("status");
  //  let remove = document.querySelector('.remove').value;

  newBook = new Book(title, author, pages, status, id);

  myLibrary.push(newBook);
  createCard(newBook);
}

//create new card
function createCard(e) {
  let contain = document.createElement("div");
  contain.classList.add("card");
  contain.id = e.id;
  cards.appendChild(contain);

  let title = document.createElement("p");
  title.classList.add("title");
  title.innerHTML = "<b>Title: </b>" + "<i>" + e.title;
  contain.append(title);

  let author = document.createElement("p");
  author.classList.add("author");
  author.innerHTML = "<b>Author: </b>" + "<i>" + e.author;
  // author.innerHTML= "<span style='font-size:40px'>Author: </span>" +e.author;
  contain.append(author);

  let pages = document.createElement("p");
  pages.classList.add("pages");
  pages.innerHTML = "<b>Number Of Pages: </b>" + "<i>" + e.pages;
  contain.append(pages);

  let read = document.createElement("button");
  read.classList.add("status");
  read.innerHTML = "Read";
  contain.append(read);
  if (e.status.checked) {
    //
    read.style.backgroundColor = "green";
    read.innerHTML = "Read";
    // addRead();
  } else {
    // read.classList.add('unchecked'); //
    read.style.backgroundColor = "red";
    read.innerHTML = "Not Read";
    //  addNotRead();
  }

  let remove = document.createElement("button");
  remove.id = e.id;
  remove.classList.add("remove");
  remove.innerHTML = "Remove";
  contain.append(remove);
  if (e.status.checked) remove.classList.add("checked");
  else remove.classList.add("unchecked");

  addTotal();
}

//toggle read status
document.addEventListener("click", function (e) {
  const target = e.target.closest(".status");
  const remove = document.querySelectorAll(".remove");
  if (target)
    if (target.innerHTML === "Read") {
      target.innerHTML = "Not Read";
      target.style.backgroundColor = "red";

      newBook.status === false;

      //    removeRead();
      //     addNotRead();
    } else {
      newBook.status === false;

      //   hangeStatus();

      target.innerHTML = "Read";
      target.style.backgroundColor = "green";
      newBook.status === true;
      //      removeNotRead();
      //      addRead();
    }
});

//remove book from array
document.addEventListener("click", function (e) {
  const target = e.target.closest(".remove");
  const status = document.querySelectorAll(".status");
  if (target) {
    myLibrary.forEach((e, i) => {
      if (e.id == target.id) myLibrary.splice(i, 1);
    });
    removeCard(target.id);
    /* if (target.classList.contains('checked'))
                {
              //      removeRead();
                       
                }
                
            else
            //    removeNotRead(); */
  }
});

//remove card from display
function removeCard(index) {
  let cardsArray = document.querySelectorAll(".card");

  cardsArray.forEach((e, i) => {
    if (e.id === index) cards.removeChild(e);
  });

  removeTotal();
  console.log(myLibrary);
}

//LOG
function addTotal() {
  total++;
  Total.innerHTML = total;
}

function removeTotal() {
  if (total > 0) {
    total--;
    Total.innerHTML = total;
  }
}

//form validation
/*
let title = document.getElementById("f_title");
let error = document.querySelector(".error");
title.addEventListener("input", (event) => {
  console.log(error);
  console.log(title.validity);
  if (!title.validity.valid) {
    console.log("wtf");
    // title.setCustomValidity("You need to put a title");
    error.textContent = "put a title pls";
  } else {
    title.setCustomValidity("");
  }
});

let btnSubmit = document.querySelector(".submit");
btnSubmit.addEventListener("click", (e) => {
  if (title.validity.valid) {
    error.textContent = "";
  } else {
    error.textContent = "put a title";
  }
}); */
