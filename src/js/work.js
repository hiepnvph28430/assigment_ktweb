const workList = [
    {
        image: "https://res.cloudinary.com/hiepnc/image/upload/v1654237929/Rectangle_30_koly1a.jpg",
        name: "Designing Dashboards",
        date: 2020,
        description: "Dashboard",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },

    {
        image: "https://res.cloudinary.com/hiepnc/image/upload/v1654445305/Rectangle_40_jvgb6r.png",
        name: "Vibrant Portraits of 2020",
        date: 2018,
        description: "Illustration",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },

    {
        image: "https://res.cloudinary.com/hiepnc/image/upload/v1654237929/Rectangle_32_jcms7a.jpg",
        name: "36 Days of Malayalam type",
        date: 2018,
        description: "Typography",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },

    {
        image: "https://res.cloudinary.com/hiepnc/image/upload/v1654237929/Rectangle_34_zpt01k.jpg",
        name: "Components",
        date: 2018,
        description: "Typography",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
];
function showWork(works) {
    if (!Array.isArray(works) || workList.length == 0) return false;

    let result = "";
    for (let i = 0; i < works.length; i++) {
        const work = works[i];
        result += `
    <div class="md:flex  md:space-x-4  gap-8 border-b pb-5  cursor-pointer group ">
        <div class="">
            <a href="">
                <img src="${work.image}"
                    alt="" class="">
            </a>
        </div>
        <div class="pt-2 md:pt-0">
            <a href="./workdetail.html">
                <h3 class="font-bold text-3xl group-hover:text-red-400">${work.name}</h3>
            </a>
            <div class="flex items-center space-x-8 py-2">
                <span
                    class=" rounded-xl px-2 bg-[#142850] text-white font-black text-lg py-1">${work.date}</span>
                <span class="text-xl text-[#8695A4]">${work.description}</span>
            </div>
            <p class="text-base font-normal">${work.shortdescription}
            </p>
        </div>
    </div>
        `;
    }
    return result;
}
document.getElementById("works").innerHTML = showWork(workList);




