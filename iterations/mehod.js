const books = [
    { tiitle: "book1", genre: "history", publish: 1981, edition: 2004 },
    { tiitle: "book2", genre: "fiction", publish: 1982, edition: 2004 },
    { tiitle: "book3", genre: "math", publish: 1983, edition: 2004 },
    { tiitle: "book3", genre: "math", publish: 1983, edition: 2004 },
    { tiitle: "book5", genre: "fiction", publish: 1985, edition: 2004 },
    { tiitle: "book6", genre: "english", publish: 1986, edition: 2004 },
  ];
  
  // const userbooks=books.filter((bookfetch)=>bookfetch.genre==="english")
  // // get the data which books is published before 1985
  // const userbooks=books.filter((booksfetch)=>booksfetch.publish<1985)
  
  // here we are checking with AND operator this will check both the conditon
  const userbooks = books.filter((booksfetch) => {
    return booksfetch.publish < 1985 && booksfetch.genre === "fiction";
  });
  
  // console.log(userbooks);
  
  //⭐⭐ NEW METHOD Map()
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
  // MAP IS ALSO A CALLBACK FUNCITON
  let Newnum = numbers.map((num) => num + 10);
  // console.log(Newnum)
  
  // CHAINING :when we use 2 ,3 methods in a row is called a chaining
  
  let againNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let newNum = againNum.map().map().filter()
  let newNum = againNum
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40);
  // console.log(newNum);
  
  const bookname = [
    { title: "history", author: "xyz" },
    { title: "hindi", author: "Premchand" },
    { title: "English", author: "Shakeshpear" },
    { title: "Math", author: "R.D Sharma" },
  ];
  
  let data = bookname.filter((bookfetch) => {
    return bookfetch.title === "history" && bookfetch.author==="xyz";
  });
  console.log(data);
  