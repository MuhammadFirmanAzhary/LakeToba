import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h1 className='text-3xl font-bold'>LUXURY INCLUDE VACATIONS FOR TWO PEOPLE</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quisquam, at laboriosam esse natus est repellendus, ex fugit inventore distinctio temporibus numquam obcaecati nihil suscipit, omnis nemo. Dolores totam iste quae architecto repellat! Magnam quae animi dolores voluptate suscipit quo!</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4 '>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button className='p-3 border bg-gradient-to-r from-primaryDark to bg-primaryLight rounded-md text-white'>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='text-xl font-bold'>LEADING SERVICE</h3>
              <p className='py-1'>ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button className='p-3 border bg-gradient-to-r from-primaryDark to bg-primaryLight rounded-md text-white'>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='text-xl font-bold'>LEADING SERVICE</h3>
              <p className='py-1'> ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border text-center'>
          <p className='pt-2'>GET ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>
              Destinations
            </label>
            <select className='border rounded-md p-2'>
              <option>Samosir Island</option>
              <option>Tomok</option>
              <option>Tiga Ras</option>
              <option>Sibea bea</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label>
              Check-In
            </label>
            <input type="date"  className='border rounded-md p-2' />
          </div>
          <div className='flex flex-col my-2'>
            <label>
              Check-Out
            </label>
            <input type="date"  className='border rounded-md p-2' />
          </div>
          <button className='w-full my-4 p-3 border bg-gradient-to-r from-primaryDark to bg-primaryLight rounded-md text-white '>Rates & Availabilities</button>
        </form>
      </div>

    </div>
  )
}

export default Search