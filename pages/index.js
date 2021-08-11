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
            <div>
            </div>
            <Header />
            <FeatureList />
            <section className="mt-16">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left lg:text-center">
                        <h1 className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                            technologies
                        </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">
                            These are some of the technologies I have worked with in the different projects in which I have been involved recently.
                        </p>
                    </div>
                </div>
            </section>
            <Logos />

            <section id='portfolio' className="mt-16">
                <div className="container flex flex-col items-center px-5 py-8 mx-auto">
                    <div className="flex flex-col w-full text-left lg:text-center">
                        <h1 className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
                            portfolio
                        </h1>
                        <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">
                            Here you can find some of the projects I have been working on.
                        </p>
                    </div>
                </div>
            </section>
            <ProjectList folder={enterpriseProjects} color="border-blue-400"  category="Enterprise" description="Work done for companies." />
            <ProjectList folder={hobbieProjects}     color="border-green-400" category="Hobbie"     description="Work done in my spare time." />
            <ProjectList folder={universityProjects} color="border-red-400"   category="University" description="Work done during my time at the university, if you are a student, enjoy it." />

            <section className="mt-32 flex flex-col items-center md:flex-row">
                <div className="container mx-auto">
                    <div className="flex justify-center px-2 py-6 ">
                        <div className="flex w-full rounded-lg xl:w-3/4 lg:w-11/12 lg:shadow-xl ">
                            <div className="relative hidden w-full h-auto bg-white bg-cover border-r rounded-l-lg lg:block lg:w-6/12">
                                <div className="relative z-10 m-12 text-left ">
                                    <Link href="/">
                                        <a className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
                                            <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-black" />
                                            <h2 className="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-gray-500 dark:text-blue-400"> hector_toral </h2>
                                        </a>
                                    </Link>
                                    <h2 className="mt-12 mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-3xl title-font">
                                        Send me an email and let's start changing the world.
                                    </h2>
                                    <div className="w-full mt-16 mb-8 text-base leading-relaxed text-gray-900 sm:md:w-3/3 lg:text-1xl ">
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
                                                    {errors?.name ? ( <span className="text-red-500 required-dot ml-0.5">*</span> ) : ( <Fragment></Fragment> )}
                                                </label>
                                                <div className="relative ">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        placeholder="Steven"
                                                        className="focus:ring-2 focus:ring-black block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                        {...register("name", { 
                                                            required:{
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
                                                            },pattern: {
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
                                                    {errors?.lastName ? ( <span className="text-red-500 required-dot ml-0.5">*</span> ) : ( <Fragment></Fragment> )}
                                                </label>
                                                <div className="relative ">
                                                    <input
                                                        id="lastName"
                                                        name="lastName"
                                                        type="text"
                                                        placeholder="Matz"
                                                        className="focus:ring-2 focus:ring-black block w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                        {...register("lastName", { 
                                                            required:{
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
                                                            },pattern: {
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
                                                {errors?.email ? ( <span className="text-red-500 required-dot ml-0.5">*</span> ) : ( <Fragment></Fragment> )}
                                            </label>
                                            <div className="relative ">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="StevenMatz@gmail.com"
                                                    className="focus:ring-2 focus:ring-black w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                    {...register("email", { 
                                                        required:{
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
                                                {errors?.message ? ( <span className="text-red-500 required-dot ml-0.5">*</span> ) : ( <Fragment></Fragment> )}
                                            </label>
                                            <div className="relative ">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    type="text"
                                                    placeholder="Your message goes here..."
                                                    className="focus:ring-2 focus:ring-black h-24 resize-none w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-100 focus:outline-none focus:shadow-outline"
                                                    {...register("message", { 
                                                        required:{
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
            </section>
        </Fragment>
    )
}

export default Home
