import logo from '../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
            <div className='mx-auto text-center'>
                <img className='inline' src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM DD YYYY")}</p>
            </div>
            <div className='flex'>
                <button className="btn btn-error">Latest</button>
                <Marquee className='text-red-500' speed={100}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>

        </div>
    );
};

export default Header;