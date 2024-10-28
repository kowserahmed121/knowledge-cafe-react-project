import profile from '../../assets/assests/profile.png'
import './Component.css'
const Component = () => {
    return (
       <div className='flex w-11/12 mx-auto py-6 border-b-2'>
         <h2 className='text-2xl font-bold'>Knowledge Cafe</h2>
         <img className='head-img' src={profile} alt="" />
       </div>
    );
};

export default Component;