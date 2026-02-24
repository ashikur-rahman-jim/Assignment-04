// Get Job counts
const total = getId('total');
const interview = getId('interview');
const rejected = getId('rejected');
const jobsCount = getId('jobs-count');

// Get all-cards and all-cards length add to total,jobs.
const allCards = getId('all-cards');
total.innerText = allCards.children.length;
jobsCount.innerText = allCards.children.length;

// Style toggle button
const allBtn = getId('all-btn');
const interviewdBtn = getId('interview-btn');
const rejectedBtn = getId('rejected-btn');

function toggleBtn(id) {
    allBtn.classList.remove('btn-primary');
    interviewdBtn.classList.remove('btn-primary');
    rejectedBtn.classList.remove('btn-primary');

    allBtn.classList.add('btn-outline');
    interviewdBtn.classList.add('btn-outline');
    rejectedBtn.classList.add('btn-outline');

    const select = getId(id);
    select.classList.remove('btn-outline');
    select.classList.add('btn-primary');

    if(id === 'interview-btn' || id === 'rejected-btn') {
        // const cards = document.querySelectorAll('.cards').classList.add('hidden');
        const allCards = getId('all-cards').classList.add('hidden');
        const noJobs = getId('no-jobs').classList.remove('hidden');
    } else {
        const allCards = getId('all-cards').classList.remove('hidden');
        const noJobs = getId('no-jobs').classList.add('hidden');
    }
    
}