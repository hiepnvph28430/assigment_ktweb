const blogList = [
    {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },

    {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },

    {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        title: "UI Interactions of the week",
        date: "12 Feb 2019",
        description: "Express, Handlebars",
        shortdescription: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
];
function showBlog(blogs) {
    if (!Array.isArray(blogs) || blogList.length == 0) return false;

    let result = "";
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        result += `
        <div class="space-y-2 border-b pb-5 grid justify-items-start cursor-pointer hover:border-red-500">
                    <a href="">
                        <h3 class="font-medium text-[26px] md:text-[30px] hover:text-red-400">${blog.title}</h3>
                    </a>
                    <div class="flex space-x-4 md:space-x-8">
                        <span class="text-[16px] md:text-xl">${blog.date}</span><span>|</span><span
                            class="text-[16px] md:text-xl text-[#8695A4]">${blog.description}</span>
                    </div>
                    <p class="text-base">${blog.shortdescription}</p>
                </div>
        `;
    }
    return result;
}
document.getElementById("blogs").innerHTML = showBlog(blogList);