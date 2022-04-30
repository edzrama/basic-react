import React from "react";

const Home = () => <main className="px-16 py-6 bg-gray-100 md:col-span-7">
<div className="flex justify-center md:justify-end">
    <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500" 
    href="a">Log In</a>
    <a className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500" 
    href="a">Sign Up</a>
</div>
<header>
    <h2 className="text-gray-700 text-6xl font-semibold">Site Title</h2>
    <h3 className="text-2xl font-semibold">Some tag line</h3>
</header>

<div>
<h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Updates</h4>

<div className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10"> 
{/* Card go here */}

{/* anything that goes over the boudary of card will be hidden*/}
{/* object cover will zoom-in the image */}
<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500" alt="dummy image"></img>
    <div className="m-4">
        <span className="font-bold"> Some Text Here</span>
        <span className="block text-gray-500 text-sm">Some Text Here</span>
    </div>
    <div className="badge">
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
        <span >Badge here</span>
    </div>
</div>
<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=2" alt="dummy image 2"></img>
    <div className="m-4">
        <span className="font-bold"> Some Text Here 2 </span>
        <span className="block text-gray-500 text-sm">Some Text Here 2</span>
    </div>
    <div className="badge">
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
        <span >Badge 2</span>
    </div>
</div>
<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=3" alt="dummy image 3"></img>
    <div className="m-4">
        <span className="font-bold"> Some Text Here 3</span>
        <span className="block text-gray-500 text-sm">Some Text Here 3</span>
    </div>
    <div className="badge">
    {/* inline blocks displays element enxt to each other */}
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>

        <span >Badge 3</span>
    </div>
</div>

<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=4" alt="dummy image 4"></img>
    <div className="m-4">
        <span className="font-bold"> Some Text Here 4</span>
        <span className="block text-gray-500 text-sm">Some Text Here 3</span>
    </div>
    <div className="badge">
    {/* inline blocks displays element enxt to each other */}
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>

        <span >Badge 3</span>
    </div>
</div>
</div>

<h4 className="font-bold mt-12 pb-2" border-b border-gray-200>Projects</h4>
<div className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10"> 
{/* Card go here */}
<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=5" alt="dummy image 5"></img>
    <div className="m-4">
        <span className="font-bold"> Things</span>
        <span className="block text-gray-500 text-sm">and stuff</span>
    </div>
    <div className="badge">
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
        <span >things</span>
    </div>
</div>
<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=6" alt="dummy image 6"></img>
    <div className="m-4">
        <span className="font-bold"> Lorem copium </span>
        <span className="block text-gray-500 text-sm">Did you know....</span>
    </div>
    <div className="badge">
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
        <span >stuff</span>
    </div>
</div>
<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=7" alt="dummy image 7"></img>
    <div className="m-4">
        <span className="font-bold"> Lorem ipsum</span>
        <span className="block text-gray-500 text-sm">Some Text Here 7</span>
    </div>
    <div className="badge">
    {/* inline blocks displays element enxt to each other */}
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>

        <span >something</span>
    </div>
</div>

<div className="card">
    <img className="w-full h-32 sm:h-48 object-cover"
    src="https://picsum.photos/500?random=8" alt="dummy image 8"></img>
    <div className="m-4">
        <span className="font-bold"> Lalala</span>
        <span className="block text-gray-500 text-sm">Lalalala</span>
    </div>
    <div className="badge">
    {/* inline blocks displays element enxt to each other */}
    <svg className="inline-block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>

        <span >something</span>
    </div>
</div>

</div>
<div className="mt-8">
<div className="flex justify-center">
    <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner tranform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</div>
</div>
</div>
</div>
</main>;

export default Home;

