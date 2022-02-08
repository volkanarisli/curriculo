
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 "></div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <Image className="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                alt="People working on laptops"
                                layout="fill"
                            />
                            <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">Land your dream job</span>
                                <span className="block text-indigo-200">just in seconds</span>
                            </h1>
                            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                Curriculo is your one stop resume creator powered by GPT-3. We help you create industry standart resumes
                                with a touch of inhuman beings.
                            </p>
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-centerx ">
                                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">
                                    <Link href="/design">
                                        <a
                                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                                            Create Resume
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Hero;
