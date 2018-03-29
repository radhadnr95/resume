function getFile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}


getFile("data.json", function(text){
let data=JSON.parse(text);
console.log(data);
details(data.basics);
career(data.career);
education(data.education);
});

var parent=document.querySelector(".flex-parent");
var child1=document.createElement("div");
child1.classList.add("profile");
parent.appendChild(child1);

var child2=document.createElement("div");
child2.classList.add("content");
parent.appendChild(child2);

function details(basic){
  var photo=document.createElement("img");
  photo.src=basic.photo;
  child1.appendChild(photo);

var name=document.createElement("h3");
name.textContent=basic.name;
child1.appendChild(name);


var email=document.createElement("a");
email.href="radhadnr1995@gmail.com";
email.textContent=basic.email;
child1.appendChild(email);


var phno=document.createElement("h3");
phno.textContent=basic.pno;
child1.appendChild(phno);


var addr=document.createElement("h3");
addr.textContent=basic.address;
child1.appendChild(addr);

var hr=document.createElement("hr");
child1.appendChild(hr);

var address=document.createElement("p");
address.textContent=basic.address;
child1.appendChild(address);
}

function career(obj){
var heading=document.createElement("h2");
// heading.textContent=obj.info;
child2.appendChild(heading);
heading.textContent="career objective";

var hline=document.createElement("hr");
child2.appendChild(hline);
var p=document.createElement("p");
p.textContent=obj.info;
child2.appendChild(p);
}

function education(edu){
var heading=document.createElement("h2");
child2.appendChild(heading);
heading.textContent="education qualification";
var hline=document.createElement("hr");
child2.appendChild(hline);
var list=document.createElement("ul");
child2.appendChild(list);
for (var i = 0; i < edu.length; i++) {
var litem=document.createElement("li");
list.appendChild(litem);
litem.textContent=edu[i].course;

var college=document.createElement("p");
list.appendChild(college);
college.textContent=edu[i].college;


var data=document.createElement("p");
list.appendChild(data);
data.textContent=edu[i].data;


}
}
