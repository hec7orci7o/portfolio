import React, { Fragment, useState } from 'react';
import Link from "next/link"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Project = ({ name, description, repo, site }) => {

    const [copied, setCopy] = useState(false)

    return (
        <section>
            <div className="flex flex-wrap">
                <div
                    className="relative m-4 bg-white border rounded-lg shadow-md p-5"
                    style={{ width: "260px", height: "125px" }}
                >
                    <h2 className="text-xs font-semibold tracking-widest text-black uppercase title-font truncate">{description}</h2>
                    <h4 className="font-semibold leading-none tracking-tighter text-black mt-1 text-2xl title-font truncate">{name}</h4>
                    <div className="absolute bottom-0 right-0 flex justify-end mb-3 mr-4">
                        {repo != "" ? (
                            <Fragment>
                                <Link href={repo}>
                                    <a className="text-sm font-semibold text-black uppercase hover:text-blue-600 mr-2" title="share">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </a>
                                </Link>
                                <CopyToClipboard
                                    text={repo + ".git"}
                                    onCopy={() => setCopy(true)}
                                >
                                    <button className="text-sm font-semibold text-black uppercase hover:text-blue-600 mr-2" title="share">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </button>
                                </CopyToClipboard>
                            </Fragment>
                        ) : (<Fragment></Fragment>)}

                        {site != "" ? (
                            <Link href={site}>
                                <a className="text-sm font-semibold text-black uppercase hover:text-blue-600" title="share">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </a>
                            </Link>
                        ) : (<Fragment></Fragment>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

Project.defaultProps = {
    view: "https://github.com/hec7orci7o",
    copy: "https://github.com/hec7orci7o",
    share: "https://github.com/hec7orci7o",
}

export default Project