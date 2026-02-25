// Get Job counts
const total = getId('total');
const interview = getId('interview');
const rejected = getId('rejected');
const jobsCount = getId('jobs-count');

let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-btn';

const mainContainer = getId('main-container');
const filterSection = getId('filter-section');
const noJobs = getId('no-jobs');

// Get all-cards and all-cards length add to total,jobs.
const allCards = getId('all-cards');
total.innerText = allCards.children.length;
jobsCount.innerText = allCards.children.length;

// Style toggle button
const allFilterBtn = getId('all-filter-btn');
const interviewFilterBtn = getId('interview-filter-btn');
const rejectedFilterBtn = getId('rejected-filter-btn');

// No jobs section show/hide function
function updateNoJobs(list) {
    if (list.length === 0) {
        noJobs.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else {
        noJobs.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }
}

function toggleBtn(id) {
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');

    allFilterBtn.classList.add('btn-outline');
    interviewFilterBtn.classList.add('btn-outline');
    rejectedFilterBtn.classList.add('btn-outline');

    const select = getId(id);

    currentStatus = id
    console.log(currentStatus);

    select.classList.remove('btn-outline');
    select.classList.add('btn-primary');

    // if (id === 'interview-filter-btn' || id === 'rejected-filter-btn') {
    //     // const cards = document.querySelectorAll('.cards').classList.add('hidden');
    //     allCards.classList.add('hidden');
    //     noJobs.classList.remove('hidden');
    // } else {
    //     allCards.classList.remove('hidden');
    //     noJobs.classList.add('hidden');
    // }

    if (id === 'interview-filter-btn') {
        allCards.classList.add('hidden');
        noJobs.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
        updateNoJobs(interviewList);
    } else if (id === 'all-filter-btn') {
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
        noJobs.classList.add('hidden');
    } else if (id === 'rejected-filter-btn') {
        allCards.classList.add('hidden');
        noJobs.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
        updateNoJobs(rejectedList);
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

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
            updateNoJobs(rejectedList);
        }

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

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
            updateNoJobs(interviewList);
        }

    }

})

// Delegation — filterSection
filterSection.addEventListener('click', function (event) {

    if (event.target.classList.contains('btn-interview')) {
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company-name').innerText;

        const existing = rejectedList.find(item => item.companyName === companyName);
        if (existing) {
            existing.stats = 'INTERVIEW';
            interviewList.push(existing);
        }

        allCards.querySelectorAll('.cards').forEach(card => {
            if (card.querySelector('.company-name').innerText === companyName) {
                card.querySelector('.stats').innerText = 'INTERVIEW';
            }
        });

    } else if (event.target.classList.contains('btn-rejected')) {
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company-name').innerText;

        const existing = interviewList.find(item => item.companyName === companyName);
        if (existing) {
            existing.stats = 'REJECTED';
            rejectedList.push(existing);
        }

        allCards.querySelectorAll('.cards').forEach(card => {
            if (card.querySelector('.company-name').innerText === companyName) {
                card.querySelector('.stats').innerText = 'REJECTED';
            }
        });

    }
});

// HTML file create
function renderInterview() {
    // make the filterSection empty every time
    filterSection.innerHTML = '';

    // creating innerHTML
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'cards bg-white shadow-md p-5 rounded-lg flex border border-gray-300'
        div.innerHTML = `
        <div class="w-full">
                    <h3 class="company-name text-base font-semibold mb-1">${interview.companyName}</h3>
                    <p class="position text-[#64748B] mb-4">${interview.position}</p>
                    <p class="location-salary text-[#64748B] mb-7">${interview.locationSalary}</p>
                    <span class="stats bg-[#EEF4FF] text-[#002C5C] px-2 py-1 font-medium rounded-md border border-[#002C5C] text-[14px]">${interview.stats}</span>
                    <p class="description text-[#323B49] my-4">${interview.description}</p>
                    <div class="flex items-center gap-3">
                        <button class="btn-interview btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn-rejected btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}


function renderRejected() {
    // make the filterSection empty every time
    filterSection.innerHTML = '';

    // creating innerHTML
    for (let rejected of rejectedList) {
        console.log(rejected);

        let div = document.createElement('div');
        div.className = 'cards bg-white shadow-md p-5 rounded-lg flex border border-gray-300'
        div.innerHTML = `
        <div class="w-full">
                    <h3 class="company-name text-base font-semibold mb-1">${rejected.companyName}</h3>
                    <p class="position text-[#64748B] mb-4">${rejected.position}</p>
                    <p class="location-salary text-[#64748B] mb-7">${rejected.locationSalary}</p>
                    <span class="stats bg-[#EEF4FF] text-[#002C5C] px-2 py-1 font-medium rounded-md border border-[#002C5C] text-[14px]">${rejected.stats}</span>
                    <p class="description text-[#323B49] my-4">${rejected.description}</p>
                    <div class="flex items-center gap-3">
                        <button class="btn-interview btn btn-outline btn-success">INTERVIEW</button>
                        <button class="btn-rejected btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>
                <div>
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}