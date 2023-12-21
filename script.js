
const blogTitle = document.getElementsByTagName("h2");
console.log(blogTitle);

for(const h2 of blogTitle){
    console.log(h2.innerText);

}

for(const p of blogTitle){
    console.log(p.innerText);
}

const heading = document.getElementById("first-heading");

heading.style.textAlign="center";
heading.style.fontSize="50px";


const firstTitle = document.getElementById("blog-1");

firstTitle.style.border="3px solid green";
firstTitle.style.width="32.33%";
firstTitle.style.padding="20px";
firstTitle.style.margin="10px";
firstTitle.style.background="#7f8c8d";

const secondTitle = document.getElementById("blog-2");

secondTitle.style.padding="20px";
secondTitle.style.width="32.33%";
secondTitle.style.margin="10px";
secondTitle.style.border="3px solid green";
secondTitle.style.background="#7f8c8d";

const thirdTitle = document.getElementById("blog-3");

thirdTitle.style.border="3px solid green";
thirdTitle.style.padding="20px";
thirdTitle.style.width="32.33%";
thirdTitle.style.margin="10px";
thirdTitle.style.background="#95a5a6";

const forthTitle = document.getElementById("blog-4");

forthTitle.style.border="3px solid green";
forthTitle.style.padding="20px";
forthTitle.style.width="32.33%";
forthTitle.style.margin="10px";
forthTitle.style.background="#95a5a6";

const h2 = document.getElementById("forth-title");
h2.innerText="I want to change my forth title";

// const li =document.createElement("li")
// li.innerText="Sixth Blog";

// const ul = document.getElementById("blog-list");

// ul.appendChild(li);

const bloglist = document.getElementById("one");
bloglist.style.margin="10px";
bloglist.style.padding="10px"
bloglist.style.border="2px solid black";
bloglist.style.borderRadius="10px"


const blogList = document.getElementById("two");

blogList.style.margin="10px";
blogList.style.padding="10px"
blogList.style.border="2px solid black";
blogList.style.borderRadius="10px"

const blogList2 = document.getElementById("three");

blogList2.style.margin="10px";
blogList2.style.padding="10px"
blogList2.style.border="2px solid black";
blogList2.style.borderRadius="10px"

const blogList3 = document.getElementById("four");

blogList3.style.margin="10px";
blogList3.style.padding="10px"
blogList3.style.border="2px solid black";
blogList3.style.borderRadius="10px"

const blogList4 = document.getElementById("five");

blogList4.style.margin="10px";
blogList4.style.padding="10px"
blogList4.style.border="2px solid black";
blogList4.style.borderRadius="10px"


