import React from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base"}>
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights reserved</span>
                <div className={"flex items-center lg:py-2"}>
                    Build With <span className={" text-xl px-1"}>&#9825;</span> by&nbsp;
                    <Link href="https://www.youtube.com/channel/UCey5gqu1lEaGLqDm7W6bZfg" className={"underline underline-offset-2"} target={"_blank"}>
                        Taspa Entertainment
                    </Link>
                </div>
                <Link href="https://www.youtube.com/channel/UCey5gqu1lEaGLqDm7W6bZfg" className={"underline underline-offset-2"} target={"_blank"}>
                    Taspa
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer;