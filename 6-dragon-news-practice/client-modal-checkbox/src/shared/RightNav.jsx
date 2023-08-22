import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h1 className="text-2xl mb-2">Login With</h1>
            <div className='space-y-2 '>
                <button className="btn btn-outline btn-info"><FaGoogle />login  with google</button>
                <button className="btn btn-outline btn-info"><FaGithub></FaGithub>login with github</button>
                <button className="btn btn-outline btn-info"><FaFacebook></FaFacebook>login with facebook</button>
                <button className="btn btn-outline btn-info"><FaTwitter></FaTwitter>login with twitter</button>
                <button className="btn btn-outline btn-info"><FaInstagram></FaInstagram>login with instagram</button>
            </div>

        </div>
    );
};

export default RightNav;