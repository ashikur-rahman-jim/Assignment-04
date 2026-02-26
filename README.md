### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer : getElementById, getElementsByClassName, এবং querySelector / querySelectorAll এর মধ্যে পার্থক্য হলো : 

getElementById(): এটি শুধুমাত্র একটি নির্দিষ্ট ID দিয়ে একটিমাত্র element খুঁজে বের করে। যদি এই ID দিয়ে কোনো element খুঁজে না পায়, তবে এটি null রিটার্ন করে। আর খুঁজে পেলে এর Return type হলো: element।

getElementsByClassName(): এটি একই class name আছে এরকম সমস্ত element খুঁজে বের করে। এটি একটি HTMLCollection রিটার্ন করে। এটি দেখতে array-এর মতো কিন্তু ভেতরে Object-এর মতো property আছে। এটি class name দিয়ে element খুঁজে না পেলে খালি array রিটার্ন করে।

querySelector(): এটি দিয়ে যেকোনো CSS selector দিয়ে element-কে ধরা যায়। যেমন: ID, class, tag। যদি একই নামের একাধিক class name থাকে, তাহলে শুধু প্রথম element-কে ধরে সেটি রিটার্ন করে। এর Return type হলো: element।
এটি ব্যবহার করে ID দিয়ে সিলেক্ট করতে হলে ID Name-এর আগে Hash (#) এবং class name-এর আগে ডট (.) বসাতে হয়। tag name-এর জন্য সরাসরি tag name বসাতে হয়।

querySelectorAll(): এটি দিয়ে class name এবং tag name দিয়ে সমস্ত element-কে ধরা যায়। অর্থাৎ একই নামের যদি একাধিক class name এবং tag name থাকে, তাহলে সবগুলোকে একসাথে ধরা যায়। (এটি ID selector-এর ক্ষেত্রে কাজ করে না)। এটি NodeList রিটার্ন করে। এটি দেখতে array-এর মতো কিন্তু ভেতরে Object-এর মতো property থাকে।

### 2. How do you create and insert a new element into the DOM?
Answer : DOM-এর মাধ্যমে createElement() ব্যবহার করে নতুন element তৈরি করতে পারি। যেমন:
`const div = document.createElement("div");`

এরপর element-এর ভেতরে content যোগ করার জন্য innerText অথবা innerHTML ব্যবহার করতে হবে। যেমন:
`div.innerText ="New div";`
`div.innerHTML = "<h1> New div </h1>";`

এরপর এটাকে insert করার জন্য appendChild() ব্যবহার করতে হবে। যেমন:
`const parent = document.getElementById("container");`
`parent.appendChild(div);`

### What is Event Bubbling? And how does it work?
Answer : Event Bubbling মানে হলো, যখন কোনো element-এ event trigger হয়, তখন সেই event-টি সেই element থেকে শুরু করে উপরের দিকে অর্থাৎ প্রথমে parent,
তারপর grandparent এভাবে করে root পর্যন্ত যায়। অর্থাৎ আমরা একটি element-এর ওপর event সেট করলে ওই element-এর ওপর যতগুলো element আছে, সবগুলোর ওপর ওই event ব্যবহার করতে পারবো।

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer : Event Delegation মানে হলো, প্রতিটি child element-গুলোতে আলাদা আলাদা event listener না দিয়ে তাদের common parent element-এ একটি listener দেওয়া হয়। Event bubbling-এর কারণে parent-এ listener থাকলেও child-এর event ধরা যায়।

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer : reventDefault() এবং stopPropagation()-এর পার্থক্য হলো :

preventDefault(): Browser-এর default behavior বন্ধ করে। যেমন: form submit করলে page reload হয়, সেটি বন্ধ করে। কিন্তু Event Bubbling চলতে থাকে।

stopPropagation(): Event-এর Bubbling বন্ধ করে। অর্থাৎ event আর ওপরে যেতে পারে না। কিন্তু Browser-এর default behavior চলে।
