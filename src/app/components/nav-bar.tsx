"use client"

import {usePathname} from "next/navigation"
import Link from 'next/link'
import {motion} from "framer-motion"
import {useState} from "react"

const navLinks = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/pages/sobre",
        name: "Sobre"
    },
    {
        path: "/pages/contato",
        name: "Contato"
    },  
    {
        path: "/pages/formacoes",
        name: "Formacões"
    },
    {
        path: "/pages/experiencias",
        name: "Experiências"
    },
    {
        path: "/pages/cursos",
        name: "Cursos"
    }            
];

function Navbar(){
    const pathname = usePathname() || "/";

    const [hoverLink, setHoverLink] = useState(pathname);

    return( 
    <div className="mx-auto border w-[800px] border-green-800/90 rounded-full mb-12 sticky top-2 z-[100] bg-stone-800/70 backdrop-blur-md">
        <nav className="flex items-center justify-evenly gap-2 w-full z-[100] rounded-lg">
        {
            navLinks.map((item, index) =>{
                const isActive = item.path == pathname;
                
                return(
                    <Link key={item.path} href={item.path} className={`px-4 py-2 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-200":"text-zinc-400"}`}
                    onMouseOver={() => setHoverLink(item.path)}
                    onMouseLeave={() => setHoverLink(pathname)}
                    >
                        <span>{item.name}</span>
                        {
                            item.path === hoverLink &&(
                                <motion.div
                                className="absolute bottom-0 left-0 h-full bg-green-800/20 rounded-full -z-10"
                                layoutId="navbar"
                                aria-hidden="true"
                                style={{
                                width: "100%"
                                }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.25,
                                    stiffness: 100,
                                    damping: 5,
                                    duration: 0.8,
                                }}
                                >

                                </motion.div>
                            )
                        }
                    </Link>
                );
            }) }
        </nav>
    </div>
    );
}

export default Navbar;