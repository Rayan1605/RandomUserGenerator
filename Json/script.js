function DisplayUser(resultElement) {
    const UserDisplay = document.querySelector('#user');
    if (resultElement === 'male') {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "pink";
    }
    userDisplay.innerHTML = ' <div class="flex justify-between">  <div class="flex">    <img\n      class="w-48 h-48 rounded-full mr-8"\n      src="${user.picture.large}"   />\   <div class="space-y-3">      <p class="text-xl">       <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}   </p>      <p class="text-xl">    <span class="font-bold">Email: </span> ${user.email}      </p>      <p class="text-xl">      <span class="font-bold">Phone: </span> ${user.phone}     </p>      <p class="text-xl">     <span class="font-bold">Location: </span> ${user.location.city} ${user.location.country}\    </p>\     <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>   </div>  </div></div> '
}
function FetchUser(){
    ShowSpinner();
    fetch('https://randomuser.me/api').then((response) => response.json()).then((data) => {
       DisplayUser(data.result[0]);
         HideSpinner();
    });
}

function ShowSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function HideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}
document.querySelector('generate').addEventListener('click, FetchUser');
FetchUser();