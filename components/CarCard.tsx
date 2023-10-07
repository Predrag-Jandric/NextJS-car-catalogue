"use client"

import { useState } from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import { CarDetails, CustomButton } from '.'
import { calculateCarRent, generateCarImageUrl } from '@/utils/indes'

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibold'>
          $
        </span>
          {carRent}
        <span className='self-end text-[14px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contai'>
      <Image src={generateCarImageUrl(car)} alt='image missing' fill priority />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <article className='flex flex-col justify-center items-center gap-2'>
            <Image src="/steering-wheel.svg" width={20} height={20} alt='image missing' />
            <p className='text-[14px]'>
              {transmission === "a" ? "automatic" : "manual"}
            </p>
          </article>
          <article className='flex flex-col justify-center items-center gap-2'>
            <Image src="/tire.svg" width={20} height={20} alt='image missing' />
            <p className='text-[14px]'>
              {drive.toLocaleUpperCase()}
            </p>
          </article>
          <article className='flex flex-col justify-center items-center gap-2'>
            <Image src="/gas.svg" width={20} height={20} alt='image missing' />
            <p className='text-[14px]'>
              {city_mpg} MPG
            </p>
          </article>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton 
            btnType="button"
            title="View More"
            containerStyles='w-full py-[10px] rounded-full bg-primary-blue'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow-svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        
    </div>
  )
}

export default CarCard
