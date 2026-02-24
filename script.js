// Get Job counts
const total = getId('total');
const interview = getId('interview');
const rejected = getId('rejected');
const jobsCount = getId('jobs-count');

let interviewList = [];
let rejectedList = [];

const mainContainer = getId('main-container');
const noJobs = getId('no-jobs');

// Get all-cards and all-cards length add to total,jobs.
const allCards = getId('all-cards');
total.innerText = allCards.children.length;
jobsCount.innerText = allCards.children.length;

// Style toggle button
const allFilterBtn = getId('all-filter-btn');
const interviewFilterBtn = getId('interview-filter-btn');
const rejectedFilterBtn = getId('rejected-filter-btn');

function toggleBtn(id) {
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');

    allFilterBtn.classList.add('btn-outline');
    interviewFilterBtn.classList.add('btn-outline');
    rejectedFilterBtn.classList.add('btn-outline');

    const select = getId(id);
    select.classList.remove('btn-outline');
    select.classList.add('btn-primary');

    if (id === 'interview-filter-btn' || id === 'rejected-filter-btn') {
        // const cards = document.querySelectorAll('.cards').classList.add('hidden');
        allCards.classList.add('hidden');
        noJobs.classList.remove('hidden');
    } else {
        allCards.classList.remove('hidden');
        noJobs.classList.add('hidden');
    }

}

// Delegation allCards section
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-interview')) {

        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.company-name').innerText;
        const position = parenNode.querySelector('.position').innerText;
        const locationSalary = parenNode.querySelector('.location-salary').innerText;
        const stats = parenNode.querySelector('.stats').innerText;
        const description = parenNode.querySelector('.description').innerText;

        console.log(companyName, position, locationSalary, stats, description);

        parenNode.querySelector('.stats').innerText = 'INTERVIEW';

        const cardInfo = {
            companyName,
            position,
            locationSalary,
            stats: 'INTERVIEW',
            description
        }

        const companyNameExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        if (!companyNameExist) {
            interviewList.push(cardInfo);
        }
        console.log(interviewList.length);

    } else if (event.target.classList.contains('btn-rejected')) {
        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.company-name').innerText;
        const position = parenNode.querySelector('.position').innerText;
        const locationSalary = parenNode.querySelector('.location-salary').innerText;
        const stats = parenNode.querySelector('.stats').innerText;
        const description = parenNode.querySelector('.description').innerText;

        console.log(companyName, position, locationSalary, stats, description);

        parenNode.querySelector('.stats').innerText = 'REJECTED';

        const cardInfo = {
            companyName,
            position,
            locationSalary,
            stats: 'REJECTED',
            description
        }

        const companyNameExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!companyNameExist) {
            rejectedList.push(cardInfo);
        }
        console.log(rejectedList.length);
    }

})