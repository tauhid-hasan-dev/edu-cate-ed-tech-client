import React from 'react';


const Blog = () => {
    return (
        <div className='bg-gray-700'>
            <div className='px-5 lg:px-28 py-10'>
                <div className="cursor-pointer card rounded-md card-compact bg-gray-800  border-green-500 items-center ">
                    <div className="card-body items-center text-center m-5 ">
                        <div className='flex items-center gap-10'>
                            <h2 className="card-title text-white text-4xl ">What is `cors`?</h2>
                        </div>
                    </div>
                    <button className="bg-btn-color bg-gray-900 text-black py-5 px-4  rounded-b  bottom-0 w-full flex justify-between items-center gap-3">
                        <div className='flex gap-5'>
                            <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                            </div>
                        </div>
                    </button>
                    <div className="card-body items-center text-start mb-3 text-white">
                        <p className='text-lg py-4 text-slate-300'>
                            Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                            An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                            For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-5 lg:px-28 py-10'>
                <div className="cursor-pointer card rounded-md card-compact bg-gray-800  border-green-500 items-center ">
                    <div className="card-body items-center text-center m-5 ">
                        <div className='flex items-center gap-10'>
                            <h2 className="card-title text-white text-4xl ">Why are you using `firebase`? What other options do you have to implement authentication?</h2>
                        </div>
                    </div>
                    <button className="bg-btn-color bg-gray-900 text-black py-5 px-4  rounded-b  bottom-0 w-full flex justify-between items-center gap-3">
                        <div className='flex gap-5'>
                            <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                            </div>
                        </div>
                    </button>
                    <div className="card-body items-center text-start mb-3 text-white">
                        <p className='text-lg py-4 text-slate-300'>
                            Firebase was originally developed to be a realtime database, and today that is still one of its key features. The Realtime Database is essentially a cloud-hosted NoSQL database that stores data as JSON (JavaScript Object Notation) in real time. One of the key advantages for Firebase’s Realtime Database is that it works offline by using local cache on the device to store any changes made. When app connectivity is resumed, the data is synced.
                            Most apps have some form of authentication feature that is necessary to identify the user. Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality. Crashlytics sends you realtime detailed alerts whenever a bug or crash occurs. Using the detailed reports, developers and testers can find and fix bugs at a faster pace. Using Crashlytics’ out-of-the-box integration with Google Analytics provides developers with a secondary method for debugging using the ‘app_exception’ event.
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-5 lg:px-28 py-10'>
                <div className="cursor-pointer card rounded-md card-compact bg-gray-800  border-green-500 items-center ">
                    <div className="card-body items-center text-center m-5 ">
                        <div className='flex items-center gap-10'>
                            <h2 className="card-title text-white text-4xl ">How does the private route work?</h2>
                        </div>
                    </div>
                    <button className="bg-btn-color bg-gray-900 text-black py-5 px-4  rounded-b  bottom-0 w-full flex justify-between items-center gap-3">
                        <div className='flex gap-5'>
                            <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                            </div>
                        </div>
                    </button>
                    <div className="card-body items-center text-start mb-3 text-white">
                        <p className='text-lg py-4 text-slate-300'>
                            The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                            PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                        </p>
                    </div>
                </div>
            </div>

            <div className='px-5 lg:px-28 py-10'>
                <div className="cursor-pointer card rounded-md card-compact bg-gray-800  border-green-500 items-center ">
                    <div className="card-body items-center text-center m-5 ">
                        <div className='flex items-center gap-10'>
                            <h2 className="card-title text-white text-4xl ">What is Node? How does Node work?</h2>
                        </div>
                    </div>
                    <button className="bg-btn-color bg-gray-900 text-black py-5 px-4  rounded-b  bottom-0 w-full flex justify-between items-center gap-3">
                        <div className='flex gap-5'>
                            <div className='flex  items-center justify-between gap-3 border-r pr-5 border-slate-600'>
                            </div>
                        </div>
                    </button>
                    <div className="card-body items-center text-start mb-3 text-white">
                        <p className='text-lg py-4 text-slate-300'>
                            Node.js is a JavaScript runtime environment. Sounds great, but what does that mean? How does that work?The Node.js run-time environment includes everything you need to execute a program written in JavaScript.Node.js came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.

                            Now you can do much more with JavaScript than just making websites interactive.

                            JavaScript now has the capability to do things that other scripting languages like Python can do.

                            Both your browser JavaScript and Node.js run on the V8 JavaScript runtime engine. This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;