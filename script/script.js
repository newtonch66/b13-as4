const cards = document.querySelectorAll('.cards');

const totalEl = document.getElementById('total-btn');
const interviewEl = document.getElementById('interview-btn');
const rejectEl = document.getElementById('rejcet-btn');

const allBtn = document.getElementById('all-button');
const interviewBtn = document.getElementById('interview-button');
const rejectBtn = document.getElementById('reject-button');


function updateCount() {
  let total = cards.length;
  let interview = 0;
  let reject = 0;

  cards.forEach(card => {
    const status = card.dataset.status;
    if (status === 'interview') interview++;
    if (status === 'reject') reject++;
  });

  totalEl.innerText = total;
  interviewEl.innerText = interview;
  rejectEl.innerText = reject;
}

updateCount();


cards.forEach(card => {
  card.dataset.status = 'all';

  const interviewBtn = card.querySelector('.text-green-500');
  const rejectBtn = card.querySelector('.text-red-500');
  const statusBtn = card.querySelector('.bg-green-200');

  interviewBtn.addEventListener('click', () => {
    card.dataset.status = 'interview';
    statusBtn.innerText = 'INTERVIEW';
    updateCount();
  });

  rejectBtn.addEventListener('click', () => {
    card.dataset.status = 'reject';
    statusBtn.innerText = 'REJECTED';
    updateCount();
  });
});


function filterCards(type) {
  cards.forEach(card => {
    if (type === 'all') {
      card.style.display = 'flex';
    } else if (card.dataset.status === type) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
// toggle button
function toggleStyle(activeId) {
  [allBtn, interviewBtn, rejectBtn].forEach(btn => {
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-soft');
  });

  const activeBtn = document.getElementById(activeId);
  activeBtn.classList.remove('btn-soft');
  activeBtn.classList.add('btn-primary');

  if (activeId === 'all-button') filterCards('all');
  if (activeId === 'interview-button') filterCards('interview');
  if (activeId === 'reject-button') filterCards('reject');
}

//   delet card 
cards.forEach(card => {
  const deleteBtn = card.querySelector('.fa-trash-can');
  deleteBtn.addEventListener('click', () => {
    card.remove();
    updateCount();
  });
});



