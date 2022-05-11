const container=document.querySelecter('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementBuId('count');
const total=document.getElementById('total');
const movieselect= document.getElementById('movie');

let ticketprice =+movieselect.value;
container.addEventListener('click',(e)=>
{
if(e.target.clasList.contains('seat') && !e.target.classList.contains('occupied'))
{
e.target.classList.toggle('selected');
}

});

