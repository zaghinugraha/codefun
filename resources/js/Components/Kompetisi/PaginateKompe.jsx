import { Link } from "@inertiajs/react";

const PaginateKompe = ({meta}) =>{
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return(
        <div>
            {console.log(meta)}
            <nav class="flex items-center -space-x-px my-5">
            {
            prev 
            && 
            <Link href={prev} type="button" class="bg-white min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span class="hidden sm:block">Previous</span>
            </Link>
            }
            <Link class="flex items-center">
                <span class="min-h-[38px] min-w-[38px] bg-white flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">{current}</span>
                <span class="min-h-[38px] min-w-[38px] bg-white flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">of</span>
                <span class="min-h-[38px] min-w-[38px] bg-white flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm  focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">{meta.last_page}</span>
            </Link>
            {
            next
            &&
            <Link href={next} type="button" class="min-h-[38px] min-w-[38px] bg-white py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
            <span class="hidden sm:block">Next</span>
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
            }
            </nav>
        </div>
    );
}

export default PaginateKompe