/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Logo from "./assets/Logo.png"
import { IoMenu } from "react-icons/io5";
import Heroimg from "./assets/heroimg.png"
import Flipkart from "./assets/flipkart.png"
import Amazon from "./assets/amazon.png"

function App() {
  const navigation = [
    { name: 'MENU', href: '' },
    { name: 'LOCATION', href: '' },
    { name: 'ABOUT', href: '' },
    { name: 'CONTACT', href: '' },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isManuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isManuOpen) //!false = true
  }
  console.log(isManuOpen);

  return (
    <>
      <nav className=' w-full'>
        <div className='flex items-center justify-between p-4 max-w-[1440px] m-auto '>
          {/* Logo */}
          <div className='text-white text-2xl font-bold flex items-center'>
            <img className='w-[80px] h-auto' src={Logo} alt="" />
          </div>

          <div className=' absolute right-6 lg:hidden'>
            <button className='text-black' onClick={toggleMenu}>
              <IoMenu className='w-6 h-6' />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12 items-center ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className=" text-black font-[600] text-[16px]">
                {item.name}
              </a>
            ))}
          </div>
          <div className='flex justify-start items-center gap-2'>
            <button className='bg-[#D01C28] text-white py-1 px-4 hidden lg:block'>Login</button>
          </div>
        </div>
        {/* Mobile menu */}
        {isManuOpen ? (
          <div className="flex flex-col text-center lg:hidden">
            {navigation.map((item) => (

              <a key={item.name} href={item.href} className=" py-3 text-black">
                {item.name}
              </a>
            ))}
            <button className='bg-[#D01C28] text-white text-center w-[120px] m-auto py-2 px-4 rounded-full lg:hidden '>Login</button>
          </div>
        ) : null}
      </nav>


      <div className='w-[1125px] m-auto mt-[152px] flex justify-center items-center gap-2'>
        <div className='w-[50%]'>
          <h1 className='text-8xl font-[800] leading-[102px]'>YOUR FEET DESERVE THE BEST OF THE BEST</h1>
          <p className='text-[#5A5959] text-[16px] font-[600] w-[410px] mt-10'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='flex justify-start items-center gap-6 mt-10'>
            <button className='bg-[#D01C28] text-[20px] py-2 px-6 font-[600] text-white'>Shop Now</button>
            <button className='border border-black text-[20px] py-2 px-6 font-[600] text-[#5A5959]'>Category</button>
          </div>
          <p className='text-[#5A5959] mt-10 font-[400] text-[18px]'> Also Available On</p>
          <div className='flex justify-start items-center gap-4 mt-4'>
            <img src={Flipkart} alt="" />
            <img src={Amazon} alt="" />
          </div>
        </div>
        <div className='w-[50%]'>
          <img className='w-[530px] h-[487px]' src={Heroimg} alt="" />
        </div>

      </div>
    </>
  )
}

export default App
