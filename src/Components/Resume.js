
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Resume.css';

export default function Resume() {
    const [contentVisible, setContentVisible] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);

    const animations = [
        'fade-in',
        'slide-in-right',
        'slide-in-left',
        'scale-up',
        'rotate',
        'bounce',
    ];

    const getRandomAnimation = () => {
        const randomIndex = Math.floor(Math.random() * animations.length);
        return animations[randomIndex];
    };

    const handleNavClick = (content) => {
        setSelectedContent(content);
        setContentVisible(true);
    };

    const handleContentClose = () => {
        setContentVisible(false);
        setSelectedContent(null);
    };

    const renderContent = (content) => {
        const animationClass = getRandomAnimation();
        const contentClasses = `content ${animationClass}`;

        switch (content) {
            case 'home':
                return (
                    <div className={contentClasses}>
                        <div className="container mx-auto px-4 mt-5">
                            <div className="bg-white border rounded-3xl shadow">
                                <div className="text-2xl border-b rounded-t-3xl text-white bg-[#2ECA7F]">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="flex justify-center">
                                                <img className="max-w-xs transition duration-100 ease-in-out hover:scale-110 m-3 max-w-[50%]" src="User.avif" alt="User Image" />
                                            </div>
                                        </div>
                                        <div className="px-4 md:px-8">
                                            <div className="p-4 md:p-6 rounded-lg">
                                                <div className="text-center">
                                                    <h1 className="text-3xl md:text-5xl mt-6 md:mt-12">Shahnawaz Bheda</h1>
                                                    <p className="text-lg md:text-xl mt-3">Web Designer</p>
                                                    <div className="mt-4 md:mt-6 flex justify-center">
                                                        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-400 mr-1">
                                                            T
                                                        </button>
                                                        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-400 mx-1">
                                                            F
                                                        </button>
                                                        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-gray-400 mx-1">
                                                            I
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7">
                                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-2xl font-bold">About <span className="text-green-500">Me</span></p>
                                            <p className="mt-4">Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                            <button type="button" className="mt-5 text-gray-900 bg-white hover-bg-gray-100 border border-gray-200 focus-ring-4 focus:outline-none focus-ring-gray-100 font-medium rounded-0 text-sm px-5 py-2.5 text-center inline-flex items-center dark-focus-ring-gray-600 dark-bg-gray-800 dark-border-gray-700 dark-text-white dark-hover-bg-gray-700 mr-2 mb-2">
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>
                                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                                            <p>Age</p>
                                            <p className="mt-2">Residence</p>
                                            <p className="mt-2">Address</p>
                                            <p className="mt-2">e-mail</p>
                                            <p className="mt-2">Phone</p>
                                            <p className="mt-2">Freelancer</p>
                                        </div>
                                        <div className="text-gray-500 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-gray-500">22</p>
                                            <p className="text-gray-500 mt-2">Rajkot</p>
                                            <p className="text-gray-500 mt-2">Bajarangvadi, Rajkot</p>
                                            <p className="text-green-400 font-bold mt-2">Shahnawazbheda@gmail.com</p>
                                            <p className="text-gray-500 mt-2">9558362840</p>
                                            <p className="text-gray-500 mt-2">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                );
            case 'resume':
                return (
                    <div className={contentClasses}>
                        <div className="container mx-auto px-4 mt-5">
                            <div className="bg-white border rounded-3xl shadow">
                                <div className="text-2xl border-b rounded-t-3xl text-white bg-[#2ECA7F]">
                                    <p className='text-5xl p-5 text-center'>Resume</p>
                                </div>

                                <div className="p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7">
                                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-2xl font-bold">About <span className="text-green-500">Me</span></p>
                                            <p className="mt-4">Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                            <button type="button" className="mt-5 text-gray-900 bg-white hover-bg-gray-100 border border-gray-200 focus-ring-4 focus:outline-none focus-ring-gray-100 font-medium rounded-0 text-sm px-5 py-2.5 text-center inline-flex items-center dark-focus-ring-gray-600 dark-bg-gray-800 dark-border-gray-700 dark-text-white dark-hover-bg-gray-700 mr-2 mb-2">
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>
                                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                                            <p>Age</p>
                                            <p className="mt-2">Residence</p>
                                            <p className="mt-2">Address</p>
                                            <p className="mt-2">e-mail</p>
                                            <p className="mt-2">Phone</p>
                                            <p className="mt-2">Freelancer</p>
                                        </div>
                                        <div className="text-gray-500 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-gray-500">22</p>
                                            <p className="text-gray-500 mt-2">Rajkot</p>
                                            <p className="text-gray-500 mt-2">Bajarangvadi, Rajkot</p>
                                            <p className="text-green-400 font-bold mt-2">Shahnawazbheda@gmail.com</p>
                                            <p className="text-gray-500 mt-2">9558362840</p>
                                            <p className="text-gray-500 mt-2">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                );
            case 'services':
                return (
                    <div className={contentClasses}>
                        <div className="container mx-auto px-4 mt-5">
                            <div className="bg-white border rounded-3xl shadow">
                                <div className="text-2xl border-b rounded-t-3xl text-white bg-[#2ECA7F]">
                                    <p className='text-5xl p-5 text-center'>Services</p>
                                </div>

                                <div className="p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7">
                                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-2xl font-bold">About <span className="text-green-500">Me</span></p>
                                            <p className="mt-4">Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                            <button type="button" className="mt-5 text-gray-900 bg-white hover-bg-gray-100 border border-gray-200 focus-ring-4 focus:outline-none focus-ring-gray-100 font-medium rounded-0 text-sm px-5 py-2.5 text-center inline-flex items-center dark-focus-ring-gray-600 dark-bg-gray-800 dark-border-gray-700 dark-text-white dark-hover-bg-gray-700 mr-2 mb-2">
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>
                                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                                            <p>Age</p>
                                            <p className="mt-2">Residence</p>
                                            <p className="mt-2">Address</p>
                                            <p className="mt-2">e-mail</p>
                                            <p className="mt-2">Phone</p>
                                            <p className="mt-2">Freelancer</p>
                                        </div>
                                        <div className="text-gray-500 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-gray-500">22</p>
                                            <p className="text-gray-500 mt-2">Rajkot</p>
                                            <p className="text-gray-500 mt-2">Bajarangvadi, Rajkot</p>
                                            <p className="text-green-400 font-bold mt-2">Shahnawazbheda@gmail.com</p>
                                            <p className="text-gray-500 mt-2">9558362840</p>
                                            <p className="text-gray-500 mt-2">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                );
            case 'portfolio':
                return (
                    <div className={contentClasses}>
                        <div className="container mx-auto px-4 mt-5">
                            <div className="bg-white border rounded-3xl shadow">
                                <div className="text-2xl border-b rounded-t-3xl text-white bg-[#2ECA7F]">
                                    <p className='text-5xl p-5 text-center'>Portfolio</p>
                                </div>

                                <div className="p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7">
                                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-2xl font-bold">About <span className="text-green-500">Me</span></p>
                                            <p className="mt-4">Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                            <button type="button" className="mt-5 text-gray-900 bg-white hover-bg-gray-100 border border-gray-200 focus-ring-4 focus:outline-none focus-ring-gray-100 font-medium rounded-0 text-sm px-5 py-2.5 text-center inline-flex items-center dark-focus-ring-gray-600 dark-bg-gray-800 dark-border-gray-700 dark-text-white dark-hover-bg-gray-700 mr-2 mb-2">
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>
                                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                                            <p>Age</p>
                                            <p className="mt-2">Residence</p>
                                            <p className="mt-2">Address</p>
                                            <p className="mt-2">e-mail</p>
                                            <p className="mt-2">Phone</p>
                                            <p className="mt-2">Freelancer</p>
                                        </div>
                                        <div className="text-gray-500 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-gray-500">22</p>
                                            <p className="text-gray-500 mt-2">Rajkot</p>
                                            <p className="text-gray-500 mt-2">Bajarangvadi, Rajkot</p>
                                            <p className="text-green-400 font-bold mt-2">Shahnawazbheda@gmail.com</p>
                                            <p className="text-gray-500 mt-2">9558362840</p>
                                            <p className="text-gray-500 mt-2">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                );
            case 'blog':
                return (
                    <div className={contentClasses}>
                        <div className="container mx-auto px-4 mt-5">
                            <div className="bg-white border rounded-3xl shadow">
                                <div className="text-2xl border-b rounded-t-3xl text-white bg-[#2ECA7F]">
                                    <p className='text-5xl p-5 text-center'>Blog</p>
                                </div>

                                <div className="p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7">
                                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-2xl font-bold">About <span className="text-green-500">Me</span></p>
                                            <p className="mt-4">Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                            <button type="button" className="mt-5 text-gray-900 bg-white hover-bg-gray-100 border border-gray-200 focus-ring-4 focus:outline-none focus-ring-gray-100 font-medium rounded-0 text-sm px-5 py-2.5 text-center inline-flex items-center dark-focus-ring-gray-600 dark-bg-gray-800 dark-border-gray-700 dark-text-white dark-hover-bg-gray-700 mr-2 mb-2">
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>
                                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                                            <p>Age</p>
                                            <p className="mt-2">Residence</p>
                                            <p className="mt-2">Address</p>
                                            <p className="mt-2">e-mail</p>
                                            <p className="mt-2">Phone</p>
                                            <p className="mt-2">Freelancer</p>
                                        </div>
                                        <div className="text-gray-500 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-gray-500">22</p>
                                            <p className="text-gray-500 mt-2">Rajkot</p>
                                            <p className="text-gray-500 mt-2">Bajarangvadi, Rajkot</p>
                                            <p className="text-green-400 font-bold mt-2">Shahnawazbheda@gmail.com</p>
                                            <p className="text-gray-500 mt-2">9558362840</p>
                                            <p className="text-gray-500 mt-2">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className={contentClasses}>
                        <div className="container mx-auto px-4 mt-5">
                            <div className="bg-white border rounded-3xl shadow">
                                <div className="text-2xl border-b rounded-t-3xl text-white bg-[#2ECA7F]">
                                    <p className='text-5xl p-5 text-center'>Contact</p>
                                </div>

                                <div className="p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7">
                                        <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-2xl font-bold">About <span className="text-green-500">Me</span></p>
                                            <p className="mt-4">Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                                            <button type="button" className="mt-5 text-gray-900 bg-white hover-bg-gray-100 border border-gray-200 focus-ring-4 focus:outline-none focus-ring-gray-100 font-medium rounded-0 text-sm px-5 py-2.5 text-center inline-flex items-center dark-focus-ring-gray-600 dark-bg-gray-800 dark-border-gray-700 dark-text-white dark-hover-bg-gray-700 mr-2 mb-2">
                                                DOWNLOAD RESUME
                                            </button>
                                        </div>
                                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                                            <p>Age</p>
                                            <p className="mt-2">Residence</p>
                                            <p className="mt-2">Address</p>
                                            <p className="mt-2">e-mail</p>
                                            <p className="mt-2">Phone</p>
                                            <p className="mt-2">Freelancer</p>
                                        </div>
                                        <div className="text-gray-500 sm:col-span-1 md:col-span-1 lg:col-span-2">
                                            <p className="text-gray-500">22</p>
                                            <p className="text-gray-500 mt-2">Rajkot</p>
                                            <p className="text-gray-500 mt-2">Bajarangvadi, Rajkot</p>
                                            <p className="text-green-400 font-bold mt-2">Shahnawazbheda@gmail.com</p>
                                            <p className="text-gray-500 mt-2">9558362840</p>
                                            <p className="text-gray-500 mt-2">Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                );
            default:
                return 'home';
        }
    };

    return (
        <div className="bg-[#F9F9F9] h-screen">
            <nav className="bg-white dark-bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <b>
                        <p className="text-2xl">Shahnawaz <span className="text-green-500">Bheda</span></p>
                    </b>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md-border-0">
                            <li>
                                <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100" onClick={() => handleNavClick('home')}>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100" onClick={() => handleNavClick('resume')}>
                                    Resume
                                </button>
                            </li>
                            <li>
                                <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100" onClick={() => handleNavClick('services')}>
                                    Services
                                </button>
                            </li>
                            <li>
                                <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100" onClick={() => handleNavClick('portfolio')}>
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100" onClick={() => handleNavClick('blog')}>
                                    Blog
                                </button>
                            </li>
                            <li>
                                <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100" onClick={() => handleNavClick('contact')}>
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 mt-5">
                <CSSTransition
                    in={contentVisible}
                    timeout={300}
                    classNames="slide-content"
                    unmountOnExit
                >
                    <div className="slide-content">
                        
                        {renderContent(selectedContent)}
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
}
