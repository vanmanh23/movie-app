import banner from '../../assets/images/banner.jpg';
import Image from 'next/image';
import FirmSlide from './FirmSlide';


export default function Header() {
  return (
    <div  className='relative w-full h-full overflow-hidden' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
        <div>
            <Image className='w-full h-screen' src={banner} alt="banner" />
        </div>
        <div className='absolute bottom-0 left-0 right-0 bg-transparent'>
            <FirmSlide />
        </div>
    </div>
  )
}
