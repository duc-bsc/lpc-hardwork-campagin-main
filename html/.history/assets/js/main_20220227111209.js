let modal = document.getElementById('modal');
let modalOpens = document.getElementsByClassName('modal-open');
let modalCloses = document.getElementsByClassName('modal-close');
let lenthModalOpens =modalOpens.length;
for(let modalOpen of modalOpens){
   modalOpen.onclick = function(){
        modal.style.display = 'flex';
     }
}