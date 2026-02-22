let interviewCount = [];
let rejectCount = [];


let total =document.getElementById("total-btn");
let interview =document.getElementById("interview-btn");
let reject =document.getElementById("reject-btn");
console.log(total, interview, reject);

const allButton =document.getElementById('all-button');
const interviewButton =document.getElementById('interview-button');
const rejectButton =document.getElementById('reject-button');


const totalCardSection=document.getElementById("total-card")
// console.log(totalCardSection.children.length)

const sectionContainer =document.querySelector('section')
console.log(sectionContainer)


function totalCardCount(){
    total.innerText= totalCardSection.children.length
    interview.innerText =interviewCount.length
    reject.innerText = rejectCount.length
}
totalCardCount()



function toggleStyle (id){
    allButton.classList.remove('bg-primary', 'text-white')
    interviewButton.classList.remove('bg-primary', 'text-white')
    rejectButton.classList.remove('bg-primary', 'text-white')

    allButton.classList.add('bg-gray-200', 'text-black')
    interviewButton.classList.add('bg-gray-200', 'text-black')
    rejectButton.classList.add('bg-gray-200', 'text-black')

    // console.log(id);

    const selected =document.getElementById(id)
    // console.log(selected);

    selected.classList.remove('bg-gray-200', 'text-black')
    selected.classList.add('bg-primary', 'text-white')
    
}
