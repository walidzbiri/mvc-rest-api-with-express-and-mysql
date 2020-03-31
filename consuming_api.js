
fetch('http://localhost:3000/contacts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var mylist=document.getElementById("malist");
    for(var i=0;i<data.data.length;i++){
        mylist.innerHTML+=`<li>${data.data[i].email}</li>`;
    }
    }
  );