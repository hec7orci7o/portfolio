import ProjectList from "../components/Projects/ProjectList"
import Logos from "../components/Logos"
import FeatureList from "../components/Features/FeatureList"
import Header from "../components/Header"
import Link from "next/link"

import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

import enterpriseProjects from "../public/data/enterprise"
import hobbieProjects from "../public/data/hobbie"
import universityProjects from "../public/data/university"

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [response, setResponse] = useState(0);

    const sendEmail = (data, e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8w7gl1h', 'template_mq9108d', e.target, 'user_1aM1NmtduSr7cQ1Ul9Nha')
            .then((response) => {
                setResponse(1);
            }, (error) => {
                setResponse(2);
            });
        setTimeout(() => {
            setResponse(0);
        }, 3500)
        e.target.reset();
    }

    return (
        <Fragment>
            <Header />

            {/* About Me */}
            <section id='about' className="mt-20">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left lg:text-center">
                        <h1 className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                            who am i?
                        </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-black opacity-75 lg:w-1/2">
                            I thought it would be easier to think of what to put here but since I can't think of anything let me give you a glimpse of my hobbies.
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-black body-font">
                <div className="container px-5 mx-auto pb-8">
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1.5 " fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M16.97 4.757a.999.999 0 0 0-1.918-.073l-3.186 9.554-2.952-6.644a1.002 1.002 0 0 0-1.843.034L5.323 12H2v2h3.323c.823 0 1.552-.494 1.856-1.257l.869-2.172 3.037 6.835c.162.363.521.594.915.594l.048-.001a.998.998 0 0 0 .9-.683l2.914-8.742.979 3.911A1.995 1.995 0 0 0 18.781 14H22v-2h-3.22l-1.81-7.243z" />
                                </svg>
                                <h2 className="ml-1.5 text-lg sm:text-xl text-black font-medium title-font mb-2 capitalize">peace</h2>
                            </div>
                            <p className="leading-relaxed text-sm mb-4 text-black opacity-75">I love sitting looking at the sea and getting lost in my thoughts in a quiet place.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="inline-flex items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1.5" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1v2zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1V9z" />
                                </svg>
                                <h2 className="ml-1.5 text-lg sm:text-xl text-black font-medium title-font mb-2 capitalize">sports</h2>
                            </div>
                            <p className="leading-relaxed text-sm mb-4 text-black opacity-75">Just as I like to be calm, I love to move and work out whenever I can.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="inline-flex items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1.5" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z" />
                                </svg>
                                <h2 className="ml-1.5 text-lg sm:text-xl text-black font-medium title-font mb-2 capitalize">knowledge</h2>
                            </div>
                            <p className="leading-relaxed text-sm mb-4 text-black opacity-75">I consider myself a very practical person who hates ignorance, that is to say, I like to know why things happen.</p>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <div className="inline-flex items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z" />
                                    <circle cx="15.73" cy="8.3" r="2" />
                                    <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z" />
                                </svg>
                                <h2 className="ml-1.5 text-lg sm:text-xl text-black font-medium title-font mb-2 capitalize">entrepreneurship</h2>
                            </div>
                            <p className="leading-relaxed text-sm mb-4 text-black opacity-75">I believe that dreaming is fine, but it is better to have goals and achieve them.</p>
                        </div>

                    </div>
                </div>
            </section>

            <FeatureList />

            {/* Technologies */}
            <section className="mt-20 pt-8">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left lg:text-center">
                        <h1 className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                            technologies
                        </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-black opacity-75 lg:w-1/2">
                            These are some of the technologies I have worked with in the different projects in which I have been involved recently.
                        </p>
                    </div>
                </div>
            </section>
            <Logos />

            <section className="mt-20">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left lg:text-center">
                        <h1 id='portfolio' className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                            portfolio
                        </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-black opacity-75 lg:w-1/2">
                            Here you can find some of the projects I have been working on.
                        </p>
                    </div>
                </div>
                <ProjectList folder={enterpriseProjects} color="border-blue-400" category="Enterprise" description="Work done for companies." />
                <ProjectList folder={hobbieProjects} color="border-green-400" category="Hobbie" description="Work done in my spare time." />
                <ProjectList folder={universityProjects} color="border-red-400" category="University" description="Work done during my time at the university, if you are a student, enjoy it." />
            </section>

            <section className="py-20 mt-20">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left lg:text-center">
                        <h1 id='portfolio' className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                            contact me
                        </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-black opacity-75 lg:w-1/2">
                            Here is a short form to get in touch with you.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                    <div className="container mx-auto">
                        <div className="flex justify-center px-2 py-6 ">
                            <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
                                <div className="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                                    <div className="relative z-10 m-12 text-left ">
                                        <Link href="/">
                                            <a className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
                                                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-black" />
                                                <h2 className="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:opacity-75 dark:text-blue-400"> hector_toral </h2>
                                            </a>
                                        </Link>
                                        <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">
                                            Send me an email and let's start changing the world.
                                        </h2>
                                        <div className="w-full mt-16 mb-8 text-base leading-relaxed text-black opacity-90 sm:md:w-3/3 lg:text-1xl ">
                                            "I'm sick of people who only see problems and don't waste a minute to help in any way they can."<br /> Help me change things.
                                        </div>
                                    </div>
                                </div>
                                <div id='contact' className="relative w-full px-8 py-24 bg-white rounded-lg border-gray-100 lg:w-8/12 lg:px-24 lg:py-4 lg:rounded-l-none s">
                                    <div className="relative z-10 text-left ">
                                        <form onSubmit={handleSubmit(sendEmail)} method="POST" className="mt-6" action="#">
                                            <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                                                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                                                    <label className="text-base font-medium leading-relaxed text-gray-700 capitalize">
                                                        First name
                                                        {errors?.name ? (<span className="text-red-500 required-dot ml-0.5">*</span>) : (<Fragment></Fragment>)}
                                                    </label>
                                                    <div className="relative ">
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            placeholder="Steven"
                                                            className="focus:ring-2 focus:ring-black block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                            {...register("name", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Name required."
                                                                },
                                                                minLength: {
                                                                    value: 2,
                                                                    message: "Name is too short."
                                                                },
                                                                maxLength: {
                                                                    value: 15,
                                                                    message: "Name is too long."
                                                                }, pattern: {
                                                                    value: /^[a-zA-Z]*$/,
                                                                    message: "Names should only contain text."
                                                                },
                                                            })}
                                                        />
                                                        {errors?.name ? (
                                                            <Fragment>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="absolute text-red-500 right-2 bottom-3" viewBox="0 0 1792 1792">
                                                                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                                                                </svg>
                                                                <p className="absolute text-sm text-red-500"> Name is invalid </p>
                                                            </Fragment>
                                                        ) : (<Fragment></Fragment>)}
                                                    </div>
                                                </div>
                                                <div className="w-full px-3 md:w-1/2">
                                                    <label className="text-base font-medium leading-relaxed text-gray-700 capitalize">
                                                        last name
                                                        {errors?.lastName ? (<span className="text-red-500 required-dot ml-0.5">*</span>) : (<Fragment></Fragment>)}
                                                    </label>
                                                    <div className="relative ">
                                                        <input
                                                            id="lastName"
                                                            name="lastName"
                                                            type="text"
                                                            placeholder="Matz"
                                                            className="focus:ring-2 focus:ring-black block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                            {...register("lastName", {
                                                                required: {
                                                                    value: true,
                                                                    message: "Last name required."
                                                                },
                                                                minLength: {
                                                                    value: 2,
                                                                    message: "Last name is too short."
                                                                },
                                                                maxLength: {
                                                                    value: 15,
                                                                    message: "Last name is too long."
                                                                }, pattern: {
                                                                    value: /^[a-zA-Z]*$/,
                                                                    message: "Last name should only contain text."
                                                                },
                                                            })}
                                                        />
                                                        {errors?.lastName ? (
                                                            <Fragment>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="absolute text-red-500 right-2 bottom-3" viewBox="0 0 1792 1792">
                                                                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                                                                </svg>
                                                                <p className="absolute text-sm text-red-500"> Last name is invalid </p>
                                                            </Fragment>
                                                        ) : (<Fragment></Fragment>)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label className="block text-base font-medium leading-relaxed text-gray-700">
                                                    Email Address
                                                    {errors?.email ? (<span className="text-red-500 required-dot ml-0.5">*</span>) : (<Fragment></Fragment>)}
                                                </label>
                                                <div className="relative ">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="StevenMatz@gmail.com"
                                                        className="focus:ring-2 focus:ring-black w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: "Email required."
                                                            },
                                                            pattern: {
                                                                value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                                                message: "Invalid email format."
                                                            }
                                                        })}
                                                    />
                                                    {errors?.email ? (
                                                        <Fragment>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="absolute text-red-500 right-2 bottom-3" viewBox="0 0 1792 1792">
                                                                <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                                                            </svg>
                                                            <p className="absolute text-sm text-red-500"> Email is invalid </p>
                                                        </Fragment>
                                                    ) : (<Fragment></Fragment>)}
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <label className="capitalize block text-base font-medium leading-relaxed text-gray-700">
                                                    message
                                                    {errors?.message ? (<span className="text-red-500 required-dot ml-0.5">*</span>) : (<Fragment></Fragment>)}
                                                </label>
                                                <div className="relative ">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        type="text"
                                                        placeholder="Your message goes here..."
                                                        className="focus:ring-2 focus:ring-black h-24 resize-none w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                        {...register("message", {
                                                            required: {
                                                                value: true,
                                                                message: "Message is required."
                                                            },
                                                            minLength: {
                                                                value: 7,
                                                                message: "Please, write something else."
                                                            },
                                                            maxLength: {
                                                                value: 300,
                                                                message: "Please, write something shorter."
                                                            },
                                                        })}
                                                    />
                                                    {errors?.message ? (
                                                        <Fragment>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="absolute text-red-500 right-2 top-4" viewBox="0 0 1792 1792">
                                                                <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
                                                            </svg>
                                                            <p className="absolute text-sm text-red-500"> Message is invalid </p>
                                                        </Fragment>
                                                    ) : (<Fragment></Fragment>)}
                                                </div>
                                            </div>
                                            <button type="submit" className="block w-full px-4 py-3 mt-6 mb-3 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home
