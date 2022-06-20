import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {data} from '../data/data.js';

function Home() {
  return (
    <div className='px-6 mt-10 py-2 w-full'>
      <div className='flex justify-between items-center'>
        <div className="flex flex-col h-16">
          <h1 className='text-2xl font-medium mb-2'>Hi, Oyindamola</h1>
          <p className='text-xs font-light'>Here is the update on your current value and historical performance of your portfolio, syncs with all major wallets</p>
        </div>
        <div className='flex space-x-8 items-center'>
          <button className='bg-white w-11 h-11 rounded-xl'>
            <svg className='mx-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#878997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9999 21L16.6499 16.65" stroke="#878997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className='bg-white w-11 h-11 rounded-xl'>
            <svg className='mx-auto' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.5C16 5.9087 15.3679 4.38258 14.2426 3.25736C13.1174 2.13214 11.5913 1.5 10 1.5C8.4087 1.5 6.88258 2.13214 5.75736 3.25736C4.63214 4.38258 4 5.9087 4 7.5C4 14.5 1 16.5 1 16.5H19C19 16.5 16 14.5 16 7.5Z" stroke="#878997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <img src="/images/profile.png" alt="" />
        </div>
      </div>
      <div className="mt-11 w-full h-auto">
        <div className='flex items-center'>
          <div className='bg-bblue w-64 px-4 py-4 h-80 rounded-xl'>
            <div className='bg-indigo-600 rounded-full p-2 w-16 h-16'>
              <img className='mx-auto' src="/images/cash.png" alt="" />
            </div>
            <h2 className='text-white text-base font-normal mt-4 mb-1'>Total Balance</h2>
            <h1 className='text-white text-3xl font-bold'>$4,509</h1>
            <div className='mt-9 h-28'>
              <svg width="226" height="102" viewBox="0 0 226 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="56.4979" width="7.63485" height="44.8548" rx="3.81743" fill="white" fillOpacity="0.64"/>
              <rect x="36.2656" y="34.5477" width="7.63485" height="66.805" rx="3.81743" fill="white" fillOpacity="0.64"/>
              <rect x="72.5312" y="23.0954" width="7.63485" height="78.2573" rx="3.81743" fill="white" fillOpacity="0.64"/>
              <rect x="108.797" y="56.4979" width="7.63485" height="44.8548" rx="3.81743" fill="white" fillOpacity="0.64"/>
              <rect x="145.062" y="34.5477" width="7.63485" height="66.805" rx="3.81743" fill="white" fillOpacity="0.64"/>
              <rect x="181.328" y="0.190857" width="7.63485" height="101.162" rx="3.81743" fill="white" fillOpacity="0.64"/>
              <rect x="217.594" y="23.0954" width="7.63485" height="78.2573" rx="3.81743" fill="white" fillOpacity="0.64"/>
              </svg>
            </div>
          </div>
          <div className='bg-white w-48 h-60 py-8 rounded-xl ml-3.5'>
            <div className='bg-pyellow rounded-full p-2 w-16 h-16 mx-auto'>
              <svg className='mx-auto my-2' width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1184 11.3502L18.8077 9.54102C18.9513 9.16763 18.6641 8.73694 18.262 8.73694H9.87661L8.06738 13.2742L7.69399 10.0866H7.92395C8.06758 10.0866 8.21121 9.97186 8.21121 9.79939V8.93783C8.21121 8.7942 8.09643 8.65057 7.92395 8.65057H6.51676C6.37314 8.65057 6.22951 8.76536 6.22951 8.93783V9.79939C6.22951 9.94302 6.34429 10.0866 6.51676 10.0866H6.77537L6.40199 13.2742L4.62157 8.82304C2.98459 9.19642 1.69237 10.5462 1.52012 12.269L1.00332 17.1223C0.945825 17.6104 1.26172 18.0413 1.74991 18.1275C2.26672 18.2423 2.98464 18.3286 3.70257 18.4147L4.16209 26.1396C4.19074 26.8001 4.73639 27.2882 5.39683 27.2882H9.13011C9.79055 27.2882 10.3076 26.7714 10.3648 26.1396L10.9966 12.9011C10.9966 12.2406 11.5423 11.7236 12.2027 11.7236H17.6016C17.8313 11.7236 18.0324 11.58 18.1186 11.3502L18.1184 11.3502Z" fill="#FFBE0A"/>
              <path d="M11.1689 3.9699C11.1689 6.14271 9.40728 7.90429 7.23448 7.90429C5.06167 7.90429 3.30029 6.14271 3.30029 3.9699C3.30029 1.79709 5.06167 0.0357056 7.23448 0.0357056C9.40728 0.0357056 11.1689 1.79709 11.1689 3.9699" fill="#FFBE0A"/>
              <path d="M16.4814 13.7051C15.9933 13.0158 15.1892 13.4467 15.1892 13.9635C15.1892 14.4803 15.5338 15.3418 15.9071 16.1459C16.5676 16.2321 17.2568 16.2895 18.0034 16.2895C18.7214 16.2895 19.3818 16.2321 20.0136 16.1748C20.4156 15.3132 20.789 14.3944 20.789 13.9923C20.789 13.3892 20.0424 13.1021 19.5829 13.7339C18.9797 14.5666 18.7502 13.3605 18.0609 13.3605C17.3716 13.3605 16.9984 14.4518 16.4814 13.7051L16.4814 13.7051Z" fill="#FFBE0A"/>
              <path d="M20.1285 17.0075C19.4681 17.0937 18.7214 17.1512 17.9748 17.1512C17.2282 17.1512 16.4814 17.0937 15.821 17.0075C14.2415 18.3572 12.4897 20.5972 12.4897 22.6074C12.4897 25.795 14.9308 27.317 17.9747 27.317C20.9901 27.317 23.4597 25.8236 23.4597 22.6074C23.4597 20.5972 21.7079 18.3573 20.1284 17.0075H20.1285ZM18.3768 24.5314V25.1346C18.3768 25.1921 18.3193 25.2493 18.262 25.2493H17.6877C17.6302 25.2493 17.573 25.1919 17.573 25.1346V24.5603C16.9698 24.5316 16.5105 24.0721 16.453 23.469C16.453 23.4115 16.5105 23.3542 16.5678 23.3542H17.1709C17.2284 23.3542 17.2857 23.3828 17.2857 23.4403C17.3144 23.6126 17.4868 23.7562 17.6877 23.7562H18.2045C18.5204 23.7562 18.7788 23.5265 18.8077 23.2394C18.8363 22.8949 18.5779 22.6076 18.2334 22.6076H17.86C17.1421 22.6076 16.4817 22.062 16.4242 21.344C16.338 20.5975 16.9123 19.9369 17.6303 19.822V19.2189C17.6303 19.1614 17.6878 19.1041 17.7451 19.1041H18.3194C18.3769 19.1041 18.4341 19.1616 18.4341 19.2189V19.7932C19.0373 19.8218 19.4966 20.2813 19.5541 20.8845C19.5541 20.942 19.4966 20.9993 19.4393 20.9993H18.865C18.8076 20.9993 18.7503 20.9706 18.7503 20.9131C18.7216 20.7408 18.5491 20.5972 18.3482 20.5972H17.8314C17.5155 20.5972 17.2571 20.827 17.2283 21.114C17.1996 21.4586 17.458 21.7745 17.8026 21.7745H18.2332C19.0373 21.7745 19.6977 22.4637 19.6116 23.2965C19.5255 23.9284 19.0086 24.4166 18.3769 24.5314H18.3768Z" fill="#FFBE0A"/>
              </svg>
            </div>
            <div className='mx-auto text-center'>
              <h2 className='font-normal text-lg mt-10 mb-4 text-lgray'>Money Spent</h2>
              <h1 className='text-3xl font-bold'>$5,000</h1>
            </div>
          </div>
          <div className='bg-white w-48 h-60 py-8 rounded-xl ml-3.5'>
            <div className='bg-lpink rounded-full p-2 w-16 h-16 mx-auto'>
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7073 12.3115V20.8427C13.7073 22.4068 14.987 23.6865 16.551 23.6865H30.7698C32.3338 23.6865 33.6135 22.4068 33.6135 20.8427V12.3115C33.6135 10.7474 32.3338 9.46774 30.7698 9.46774H16.551C14.987 9.46774 13.7073 10.7474 13.7073 12.3115ZM27.926 13.7334H19.3948V12.3115H27.926V13.7334Z" fill="#FF4F79"/>
            <path d="M37.5944 26.6724C37.31 26.388 36.8835 26.1036 36.0304 25.9614C35.1772 25.8192 30.6272 25.2505 30.0585 25.1083C29.2054 24.9661 28.2101 25.3927 26.9304 26.2458C26.0772 26.8146 24.371 27.8099 24.2288 27.8099C24.371 27.9521 25.0819 27.9521 25.0819 27.9521H25.2241C26.7882 27.9521 27.9257 29.2318 27.9257 30.6537V30.938C27.9257 32.5021 26.646 33.6396 25.2241 33.6396H22.2382C19.6788 33.6396 17.2616 31.0802 17.2616 31.0802C17.2616 31.0802 20.2476 32.2177 22.2382 32.2177H25.0819C25.9351 32.2177 26.5038 31.5068 26.5038 30.7958C26.5038 30.0849 25.9351 29.374 25.2241 29.374C22.5226 29.0896 21.3851 27.9521 21.3851 27.9521C21.3851 27.9521 18.9679 26.1036 18.1147 25.6771C15.1288 23.9708 9.5835 27.5255 9.5835 27.5255L13.2804 35.6303C13.2804 35.6303 15.1288 34.4928 17.6882 35.4881C19.3944 36.199 20.3897 36.7678 22.096 37.3365C24.5132 38.1897 25.3663 38.0475 26.9304 36.91C28.3522 35.9146 35.1772 30.5115 36.1725 29.8005C37.5944 28.5208 38.3054 27.5255 37.5944 26.6724Z" fill="#FF4F79"/>
            </svg>

            </div>
            <div className='mx-auto text-center'>
              <h2 className='font-normal text-lg text-lgray mt-10 mb-4'>Money Invested </h2>
              <h1 className='text-3xl font-bold'>$5,000</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-14 py-1'>
        <div className=" flex">
          <h1 className='font-bold text-bblue'> Wallet</h1>

        </div>
        <div className='w-full'>
          <ResponsiveContainer>
            
            <AreaChart
              data={data}
              
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area className='fill-bblue' type="monotone" dataKey="uv" stroke="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Home