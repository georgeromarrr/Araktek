import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoimg from './logo-white-text.png';
import romarimg from './team/romar.jpg';
import louieimg from './team/Louie.jpg'
import johnimg from './team/John.jpg'


// Logo Image
export const FooterLogo = () => {
  return (
    <img className='h-14' src={logoimg} alt='Araktek Logo' />
  )
}

// Icons
export const ArrIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  )
}

// Newsletter Button
export const RightIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 31">
      <polygon fill="#fff" points="569 3037 569 3058 548 3058 548 3056 567 3056 567 3037" transform="rotate(-45 -3379.948 2203.858)"></polygon>
    </svg>
  )
}

// Team Avatar
export const Romar = () => {
  return (
    <img className='h-20 w-20 rounded-full' src={romarimg} alt='Romar Image' />
  )
}

export const Louie = () => {
  return (
    <img className='h-20 w-20 rounded-full' src={louieimg} alt='Louie Image' />
  )
}

export const John = () => {
  return (
    <img className='h-20 w-20 rounded-full' src={johnimg} alt='John Image' />
  )
}


// Footer Details
export const FooterDetails = () => {
  const [isSupportOpen, setSupportOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);

  return (
    <>
    {/* desktop view */}
    <div className='container mx-auto mt-14 pb-6 laptop:hidden tablet:hidden mobile:hidden'>
      <div className='flex justify-between px-4 pt-10'>
        <div className=' text-white w-6/12'>
          <FooterLogo/>
          <p className='my-3'>Araktek is the go-to shop for pre-built pc, accessories and collectible items. With a wide range of quality products. Araktek has you covered for providing the latest and in-demand products available in our store at a reasonable price tag.</p>
        </div>
        <div className='text-white mt-2'>
          <h1 className='font-dge_bold text-3xl mt-4 mb-7'>SUPPORT</h1>
          <Link to='/'><p className='my-2 footer-item'>Return & Refund</p></Link>
          <Link to='/'><p className='my-2 footer-item'>Order Cancellation</p></Link>
          <Link to='/'><p className='my-2 footer-item'>Warranty</p></Link>
          <Link to='/'><p className='my-2 footer-item'>FAQs</p></Link>
        </div>
        <div className='text-white mt-2'>
          <h1 className='font-dge_bold text-3xl mt-4 mb-7'>ABOUT</h1>
          <Link to='/about'><p className='my-2 footer-item'>Company</p></Link>
          <Link to='/'><p className='my-2 footer-item'>Promos</p></Link>
          <Link to='/'><p className='my-2 footer-item'>Support</p></Link>
          <Link to='/'><p className='my-2 footer-item'>Terms & Services</p></Link>
        </div>
      </div>

      <div className='flex gap gap-x-[149px] px-4 pt-5 pb-8'>
        <div className=' text-white w-6/12'>
          <h1 className='font-dge_bold text-3xl mt-4'>KEEP IN TOUCH</h1>
          <p className="text-gray-200 text-sm mb-4">Subscribe to our newsletter to keep in touch</p>
          <form className="flex border p-1 w-9/12">
            <input type="text" className='newsletter w-full bg-black placeholder-slate-200' placeholder='Email Address' required/>
            <button className='mx-2' type='submit'><RightIcon/></button>
          </form>
        </div>
        <div className='text-white mt-2'>
          <h1 className='font-dge_bold mt-6 mb-2 text-2xl'>The Dev Team</h1>
          <div className='flex gap-5 pl-10'>
            <Link to='/about'><John/></Link>
            <Link to='/'><Romar/></Link>
            <Link to='/'><Louie/></Link>
          </div>
        </div>
      </div>
    </div>

    {/* laptop, tablet, mobile view */}
    <div className='container mx-auto mt-14 pb-6 desktop:hidden'>
      <div className='px-4 pt-10'>
        <div className=' text-white w-full pb-10'>
          <h1 className='font-dge_bold text-3xl mt-4'>KEEP IN TOUCH</h1>
          <p className="text-gray-200 text-sm mb-4">Subscribe to our newsletter to keep in touch</p>
          <form className="flex border p-1 w-full">
            <input type="text" className='newsletter w-full bg-black placeholder-slate-200' placeholder='Email Address' required/>
            <button className='mx-2' type='submit'><RightIcon/></button>
          </form>
        </div>

        <div className=' text-white w-full'>
          <FooterLogo/>
          <p className='my-3'>Araktek is the go-to shop for pre-built pc, accessories and collectible items. With a wide range of quality products. Araktek has you covered for providing the latest and in-demand products available in our store at a reasonable price tag.</p>
        </div>

        <div className='text-white my-10 w-full'>
          <div className='footer-men border-b-[1px] border-white h-13'>
            <button className='w-full flex justify-between items-center mb-4' onClick={()=> {setSupportOpen(!isSupportOpen)}}><p className='font-dge_bold text-3xl'>SUPPORT</p>
            <span className={isSupportOpen && 'origin-center rotate-180'}><ArrIcon/></span>
            {/* <span className='origin-center rotate-180'><ArrIcon/></span> */}
            </button>

            {isSupportOpen && 
            <div className='my-3'>
              <Link to='/'><p className='my-2 footer-item'>Return & Refund</p></Link>
              <Link to='/'><p className='my-2 footer-item'>Order Cancellation</p></Link>
              <Link to='/'><p className='my-2 footer-item'>Warranty</p></Link>
              <Link to='/'><p className='my-2 footer-item'>FAQs</p></Link>
            </div>}
        
          </div>
        </div>

        <div className='text-white my-10'>
          <div className='border-b-[1px] border-white h-13'>
            <button className='w-full flex justify-between items-center mb-4'  onClick={()=> {setAboutOpen(!isAboutOpen)}}><p className='font-dge_bold text-3xl'>ABOUT</p>
            <span className={isAboutOpen && 'origin-center rotate-180'}><ArrIcon/></span>
            </button>

            {isAboutOpen && 
            <div className='my-3'>
              <Link to='/about'><p className='my-2 footer-item'>Company</p></Link>
              <Link to='/'><p className='my-2 footer-item'>Promos</p></Link>
              <Link to='/'><p className='my-2 footer-item'>Support</p></Link>
              <Link to='/'><p className='my-2 footer-item'>Terms & Services</p></Link>
            </div>}
          </div>
        </div>

        <div className='text-white mt-2'>
          <h1 className='font-dge_bold mt-6 mb-2 text-2xl'>The Dev Team</h1>
          <div className='flex justify-center gap-5'>
            <Link to='/about'><John/></Link>
            <Link to='/'><Romar/></Link>
            <Link to='/'><Louie/></Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

// Footer Credits
export const FooterCredits = () => {
  return (
    <>
    {/* desktop, laptop, tablet view */}
    <div className='container mx-auto my-4 text-sm px-3 mobile:hidden'>
       © 2022 Araktek. All Rights Reserved | Handfully created by  <Link to='/'><span>Aracholō Group</span></Link>
    </div>

    {/* mobile view */}
    <div className='container mx-auto my-4 text-sm px-3 text-center desktop:hidden laptop:hidden tablet:hidden mobile:block'>
      <p>© 2022 Araktek. All Rights Reserved</p>
      <p>Handfully created by  <Link to='/'><span>Aracholō Group</span></Link></p>
    </div>
    </>
  )
}
