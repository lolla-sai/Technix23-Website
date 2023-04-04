import Image from 'next/image';
import {AiOutlineArrowUp, AiOutlineInstagram} from 'react-icons/ai';
import {CiLinkedin} from 'react-icons/ci';
import {BsEnvelope} from 'react-icons/bs';
import CustomButton from '../components/CustomButton';


function FooterPage(){
    return(
        <>
        <div id="top"></div>
        <div className=''></div>
        <div className="flex gap-5 flex-col md:flex-row items-center justify-center relative h-screen ">
            {/* <Image src={dummyMap} width={300} height={300} className="absolute top-28 right-48" /> */}
            <div className="m-50 font-satoshi">
                <div className="mb-10 custom-width">
                    <div className="font-LondrinaSolid text-custom-red text-heading-size"> CONTACT US</div>
                    <div className="text-subheading-size font-normal">Feel free to reach out to us for any events related or other queries.</div>
                </div>
                <div className="mb-4">
                    <p className="text-custom-red text-name-size font-bold">Vineet Sawant (Event Manager)</p>
                    <p className="text-contact-size font-normal">Email | WhatsApp Link</p>
                </div>
                <div>
                    <p className="text-custom-red text-name-size font-bold">Manthan Prabhu (General Secretary)</p>
                    <p className="text-contact-size font-normal">Email | WhatsApp Link</p>
                </div>
            </div>
            <div className="md:pl-20 map-div flex flex-wrap justify-center">
            {/* <iframe src=""  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3755.9743617960876!2d73.978366!3d15.424195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54b908417d%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1680007500929!5m2!1sen!2sin"
                alt="GEC Computer Department Location"  className="map rounded-mid border border-custom-red border-4"
                // 
                />
                
            </div>
        </div>
        <div>
            <CustomButton dest='./#top' styling=' font-LondrinaSolid px-6  md: py-4 text-xl rounded-full top-button bg-custom-pitch'>
                 <div className="flex flex-row items-center">Top <AiOutlineArrowUp className='ml-2' /></div> 
            </CustomButton>
            <CustomButton dest='gmail' styling='w-10 shadow-lg'>
                <div class="flex flex-row items-center mt-4 md:mt-0 gmail-button"><BsEnvelope size={40}/></div>
            </CustomButton>
            <CustomButton dest='instagram_link' styling='w-10 shadow-lg'>
                <div className="flex flex-row items-center insta-button mt-4 md:mt-0 ml-2 md:ml-0"><AiOutlineInstagram className='ml-2' size={40} /></div>
            </CustomButton>
            <CustomButton dest='linkedin_link' styling='w-10 shadow-lg'>
                <div className="flex flex-row items-center linkedin-button mt-4 md:mt-0 ml-3 md:ml-0"><CiLinkedin className='ml-2' size={40} /></div>
            </CustomButton>
        </div>
         
        <div>
            <p className='font-satoshi font-normal copyrights-footer'>© 2023 Technix. All Rights Reserved. </p>
        </div>
        </>
    );
}

export default FooterPage;

// AiOutlineArrowUp