import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import image from '../assets/Sajek.png'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BiArrowToRight } from 'react-icons/Bi';


import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// import { useRef } from 'react';



const Slider = () => {
  const [running, setRunning] = useState(5)

  const [places, setPlaces] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/travel')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPlaces(data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [])
  const current = places.find(m => m.id == running)
  console.log(current)

  // const swiper = useRef(null);
  // console.log(swiper);
  const handlePrev = () => {
    if (running == 1) {
      setRunning(places.length)

      // swiper.current.swiper.slidePrev();
      // console.log(
      //   swiper.current.swiper.slidePrev());

    } else {
      const rr = running - 1
      setRunning(rr)
    }
  }

  const handleNext = () => {
    if (places.length == running) {
      setRunning(1)
      // swiper.current.swiper.slideNext();
    } else {
      const rr = running + 1
      setRunning(rr)
    }
  }
  return (
    <div className='pt-10'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        <div className=''>
          <h2 className='text-4xl font-bold uppercase mb-5'>{current?.name}</h2>
          <p className='mt-5 pb-5'>{current?.description}</p>
          <Link to={`/booking/${running}`} className='px-4 py-2 w-40 rounded-lg text-black bg-yellow-500 mt-10 flex justify-center item-center'>Booking <BiArrowToRight className='text-3xl'></BiArrowToRight></Link>
        </div>
        <div className=''>
          <Swiper
            // install Swiper modules
            modules={[Pagination, Scrollbar, Autoplay]}
            spaceBetween={5}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={true}
          // freeMode={true}
          // loop={true}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
            {
              places.map((item, i) => <SwiperSlide key={i}>
                <button onClick={() => setRunning(item.id)} className='relative bg-gradient-to-r()	'>
                  {/* <img src={item.image_url} alt="" /> */}
                  <img className={`w-full rounded-xl  border-4  ${item?.id == running ? '  border-yellow-500' : ''}`} src={item.image_url} alt="" />
                  <div className='absolute bottom-1  rounded-xl bg-gradient-to-t w-full from-[#000000b0] to-transparent'>
                    <h2 className=' text-xl font-bold text-center p-2'>{item.name}</h2>

                  </div>

                </button></SwiperSlide>

              )
            }
          </Swiper>

        </div>

      </div>

      <div className='flex justify-center gap-5 mt-10'>
        <button onClick={handlePrev}><BsFillArrowLeftCircleFill className='text-4xl'></BsFillArrowLeftCircleFill></button>
        <button onClick={handleNext}><BsFillArrowRightCircleFill className='text-4xl'></BsFillArrowRightCircleFill></button>

      </div>


    </div>
  );
};

export default Slider;