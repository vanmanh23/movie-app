import Image from 'next/image';
import firm1 from '../../assets/images/avater-poster.jpg';
import firm2 from '../../assets/images/avengers-poster.jpg';
import firm3 from '../../assets/images/black-panther-poster.jpg';
import firm4 from '../../assets/images/damsel-movie-poster.jpg';
import firm5 from '../../assets/images/final-destination-poster.jpg';
import firm6 from '../../assets/images/fragment-poster.jpg';
import firm7 from '../../assets/images/harry-potter-poster.jpg';
import firm8 from '../../assets/images/moviie-the-mother.jpg';
import firm9 from '../../assets/images/quatumania-poster.jpg';
import firm10 from '../../assets/images/shodow-bone-poster.jpg';
import firm11 from '../../assets/images/the-adam-poster.jpeg';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function FirmSlide() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const Listfirms = [
        {
            id: 1,
            posterImage: firm1
        },
        {
            id: 2,
            posterImage: firm2
        },
        {
            id: 3,
            posterImage: firm3
        },
        {
            id: 4,
            posterImage: firm4
        },
        {
            id: 5,
            posterImage: firm5
        },
        {
            id: 6,
            posterImage: firm6
        },
        {
            id: 7,
            posterImage: firm7
        },
        {
            id: 8,
            posterImage: firm8
        },
        {
            id: 9,
            posterImage: firm9
        },
        {
            id: 10,
            posterImage: firm10
        },
        {
            id: 11,
            posterImage: firm11
        },
    ] 
    const handleNext = () => {
        if(currentIndex < Listfirms.length - 8){
            setCurrentIndex((currentIndex + 1));
        }
    }
    const handlePriviousClick = () => {
        if(currentIndex > 0){
            setCurrentIndex((currentIndex - 1));
        }
    }
    console.log("length array: ", Listfirms.length);
    return (
        <div className='relative w-full flex flex-col justify-center items-center'>
        <div className="flex flex-row items-center w-full h-60 bg-slate-400 bg-slate-400 transform transition-transform duration-1000 ">    
            {Listfirms.slice(currentIndex, currentIndex + 7).map((firm) => (
                <div key={firm.id} className="w-full h-full bg-slate-400 hover:scale-125">
                    <Image src={firm.posterImage} alt="poster" className='w-full h-full '/>
                </div>
            ))}
        </div>
        <div className='absolute bottom-1/2 flex flex-row justify-between w-11/12 text-center m-auto items-center'>
            <button onClick={handlePriviousClick} className='text-white p-4 hover:opacity-40 hover:bg-gray-500  rounded-full'><ChevronLeft /></button>
            <button onClick={handleNext} className='text-white p-4 hover:opacity-40 hover:bg-gray-500 rounded-full'><ChevronRight /></button>
        </div>
        </div>   
    )
}