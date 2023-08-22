import moment from 'moment';
import { useState } from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <div>
            <div className="mb-4 ">
                <div className='flex justify-center items-center px-2 bg-base-300'>
                    <img style={{ height: '40px' }} src={author?.img} alt="" className='rounded-full' />
                    <div className='pl-2 grow'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                    </div>
                    <div className='flex'>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt="image" /></figure>
                    <h1>{details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...
                            <Link
                                className="text-red-500"
                                onClick={openModal}
                            >
                                Read More
                            </Link>

                            {isOpen && (
                                // <div className='relative'>
                                <div className="fixed inset-0 flex items-center justify-center z-50 w-1/2 mx-auto overflow-auto">
                                    <div className="bg-slate-200 p-8 space-y-4 rounded-lg shadow-lg" >
                                        <img className='w-full mt-12' src={image_url} alt="image" />
                                        <h2 className="text-xl font-semibold ">{title}</h2>
                                        <p>{details}</p>
                                        <button
                                            className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>

                            )}

                        </>
                    }</h1>
                </div>
                <div className='flex px-2 bg-base-300'>
                    <div className='grow'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <span> {rating?.number}</span>
                    </div>
                    <div >
                        <p className=' flex items-center justify-center'><FaEye></FaEye> {total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;