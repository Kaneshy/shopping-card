'use client'
import Link from "next/link"
import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

    const [isActive, setisActive] = useState(false)

    return (
        <main className="flex justify-between p-4 gap-x-4 select-none bg-neutral-900">
            <section className="flex gap-x-2">
                <img src="/assets/logo.svg" alt="" />
                <label className="max-sm:hidden" htmlFor="img">PixelShopping</label>
            </section>
            <section className="flex justify-end w-full gap-x-8">
                <div>
                    <div className="flex justify-between gap-x-6 max-sm:hidden">
                        <Link href={'/'} >Home</Link>
                        <Link href={'/'} >About</Link>
                        <Link href={'/'} >Contact</Link>
                        <Link href={'/'} >Share</Link>
                    </div>
                    <div className="">
                        <div className={`max-sm:flex hidden px-2 ${isActive && 'bg-neutral-800 rounded'}`} onClick={() => setisActive(!isActive)}>
                            {isActive ? (
                                <RiMenu3Fill size={25} className="text-neutral-400 hover:text-neutral-200" />
                            ) : (
                                <FiMenu size={25} className="text-neutral-400 hover:text-neutral-200" />
                            )}
                        </div>
                        {isActive && (
                            <div className=" fixed top-14 left-0 right-0 bg-neutral-900 p-4 rounded flex-col gap-y-2 max-sm:flex hidden">
                                <section className="flex gap-x-2 hover:bg-neutral-600 p-2 rounded">
                                    <img src="/assets/logo.svg" alt="" />
                                    <p  >more</p>
                                </section>
                                <section className="flex gap-x-2 hover:bg-neutral-600 p-2 rounded">
                                    <img src="/assets/logo.svg" alt="" />
                                    <p  >setting</p>
                                </section>
                            </div>
                        )}

                    </div>
                </div>
                <Link href={'/'} className="px-4">
                    <FaShoppingCart size={25} className="text-white" />
                </Link>
            </section>
        </main>
    )
}

export default Navbar