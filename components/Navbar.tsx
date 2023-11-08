"use client"

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useState } from "react";
import { SignInBtn } from ".";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={148}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        handleClick={() => setIsOpen(true)}
      />
    </nav>

    <SignInBtn isOpen={isOpen} closeModal={() => setIsOpen(false)} />

  </header>
)
};

export default NavBar;