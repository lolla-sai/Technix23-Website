import Image from 'next/image';
import {AiOutlineArrowUp, AiOutlineInstagram} from 'react-icons/ai';
import {CiLinkedin} from 'react-icons/ci';
import {BsEnvelope} from 'react-icons/bs';
import CustomButton from '../components/CustomButton';
import { londrinasolid } from '@/data/fonts';


function FooterPage(){
    const style = {
        "boxShadow" : "-3px 4px 0px 0px #000000"
    }

    return(
        // Outer Black Background Div
        <div className='bg-footer-black h-screen w-full overflow-x-hidden'>
            {/* Website View Wave */}
            <Image className='absolute top-[27.5%] w-full h-[10vh] hidden md:block' src='/assets/wave-3.svg' alt='Wave' width={0} height={0} sizes='100vw'/>
            {/* Mobile View Wave */}
            <Image className='absolute top-[8%] left-[-11%] w-full h-[10vh] md:hidden block' src='/assets/wave-m-3.svg' alt='Wave' width={0} height={0} sizes='100vw'/>
            {/* Upper Div Leaf */}
            <div className="relative max-w-full">
                <Image
                    className="absolute top-[-20%] right-[10%] md:top-[-4px] md:right-[-16%] xl:w-[500px] xl:h-[580px] md:w-[200px] md:h-[280px]"
                    src="/assets/footer-leaf.svg"
                    alt="Leaf"
                    width={100}
                    height={100}
                />
            </div>

            {/* Inner Pitch Background Div */}
            <div className='bg-custom-pitch absolute md:top-[272px] top-[16%] left-0 right-0 bottom-0 h-screen overflow-hidden'>
                <div id="top"></div>

                {/* Leaves and QR Squares */}
                <div className='hidden md:block overflow-hidden'>
                    <Image className='absolute top-[-45%] right-[-15%] xl:w-[500px] xl:h-[580px] md:w-[200px] md:h-[280px] object-contain' src='/assets/footer-leaf.svg' alt='Leaf' width={100} height={100}/>
                </div>
                <div className='hidden md:block overflow-hidden'>
                    <Image className='absolute top-[28%] right-[-3%] w-[120px] h-[120px] object-contain' src='/assets/footer-qr-1.svg' alt='Leaf' width={100} height={100}/>
                </div>
                <div className='hidden md:block overflow-hidden'>
                    <Image className='absolute top-[50%] right-[-5%] w-[170px] h-[170px] object-contain' src='/assets/footer-qr-2.svg' alt='Leaf' width={100} height={100}/>
                </div>
                <div className=' overflow-hidden'>
                    <Image className='absolute top-[75%] right-[-10%] md:top-[85%] md:right-[-8%] md:w-[300px] md:h-[300px] lg:top-[87%] lg:right-[-2%] lg:w-[120px] lg:h-[120px] object-contain transform rotate-[21] md:transform md:-rotate-[21]' src='/assets/footer-qr-1.svg' alt='Leaf' width={100} height={100}/>
                </div>
                <div className='hidden md:block overflow-hidden'>
                    <Image className='absolute md:bottom-[-15%] md:left-[-20%] lg:bottom-[-32%] lg:left-[-12%] w-[500px] h-[580px] object-contain ' src='/assets/footer-leaf.svg' alt='Leaf' width={100} height={100}/>
                </div>
                <div className='hidden md:block overflow-hidden'>
                    <Image className='absolute top-[34%] left-[-4%] w-[120px] h-[120px] object-contain transform rotate-45' src='/assets/footer-qr-1.svg' alt='Leaf' width={100} height={100}/>
                </div>
                <div className='overflow-hidden'>
                    <Image className='absolute bottom-[-6%] left-[-18%] w-[140px] h-[140px]  md:top-[5%] md:bottom-0 md:left-[-4.5%]  md:w-[170px] md:h-[170px] object-contain' src='/assets/footer-qr-2.svg' alt='Leaf' width={100} height={100}/>
                </div>

                {/* Content Section */}
                <div className="absolute md:top-[-20%] lg:left-[20%] md:left-[8%] flex gap-5 flex-col md:flex-row items-center justify-center h-screen ">
                    {/* Contact Details */}
                    <div className="m-50 md:w-[200px] font-satoshi xl:w-[400px] relative top-[10%] md:top-0 text-center md:text-left">
                        <div className="mb-10 w-[66.6666667%] ml-14 md:ml-0">
                            <div className={"text-custom-red md:text-3xl text-2xl md:ml-0 ml-10 " + londrinasolid.className}> CONTACT US</div>
                            <div className="text-base font-normal w-[300px] relative left-[-5%] md:left-0">Feel free to reach out to us for any events related or other queries.</div>
                        </div>
                        <div className="mb-4 relative left-[3%] md:left-0">
                            <p className="text-custom-red text-xl font-bold">Vineet Sawant (Event Manager)</p>
                            <p className="text-lg font-normal">vineetswant@gmail.com | WhatsApp Link</p>
                        </div>
                        <div className='relative left-[3%] md:left-0'>
                            <p className="text-custom-red text-xl font-bold">Manthan Prabhu (General Secretary)</p>
                            <p className="text-lg font-normal">montyphr94@gmail.com | WhatsApp Link</p>
                        </div>
                    </div>
                    {/* Map */}
                    <div className="md:pl-20 ml-[20px] absolute md:relative top-[4%] md:top-0 flex flex-wrap justify-center ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3755.9743617960876!2d73.978366!3d15.424195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54b908417d%3A0x413acca8e6df29a7!2sComputer%20Engineering%20Department!5e1!3m2!1sen!2sin!4v1680007500929!5m2!1sen!2sin"
                            alt="GEC Computer Department Location"  className="xl:w-[500px] xl:h-[300px] w-[350px] h-[200px] md:w-[350px] md:h-[350px] xmd:w-[400px] avg:h-[20rem] xsm:h-[300px] xsm:ml-14 sm:ml-0 mr-[2%] md:mr-0 rounded-mid border-custom-red border-4"
                        />
                        
                    </div>
                </div>

                {/* Desktop + Tablet View Divider */}
                <div className='overflow-hidden'>
                    <Image className='hidden md:block absolute mt-4 md:top-[45%] md:left-[15%] lg:top-[50%] lg:left-[22%] top-[85%] left-[13%] md:mt-[40px] w-[300px] xl:w-[1000px] md:w-[600px] md:h-[170px] object-contain' src='/assets/divider.svg' alt='Leaf' width={100} height={100}/>
                </div>
                
                {/* Mobile Screen Divider */}
                <div className='w-72'>
                    <div className='md:hidden absolute bottom-[19.5%] left-[11.5%] w-0 h-0 p-[6px] rounded-md bg-black'></div>
                    <hr className="absolute bottom-[20%] left-[13%] md:hidden h-1 w-full bg-black rounded-full" />
                    <div className='md:hidden absolute bottom-[19.5%] right-[10.5%] w-0 h-0 p-[6px] rounded-md bg-black'></div>
                </div>

                <div>
                    {/* Top Button */}
                    <CustomButton dest='./#top' styling={'px-6 md:py-4 text-xl md:mt-[20px] xl:mt-0 rounded-full fixed bottom-[30px] right-[40px] border-solid border-3 border-black w-[100px] h-[50px] bg-custom-pitch ' + londrinasolid.className} style ={style} >
                        <div className="flex flex-row items-center">Top <AiOutlineArrowUp className='ml-2' /></div> 
                    </CustomButton>

                    {/* Email Button */}
                    <CustomButton dest='mailto:cursorcouncilgec@gmail.com' styling='w-10 shadow-lg'>
                        <div className="flex flex-row items-center mt-[20px] md:mt-0 absolute bottom-[5%] left-[30%] md:top-[40%] md:left-[45%] lg:top-[70%] lg:left-[22%]"><BsEnvelope size={40}/></div>
                    </CustomButton>

                    {/* Instagram Button */}
                    <CustomButton dest='https://instagram.com/teamcursor?igshid=ZDdkNTZiNTM=' styling='w-10 shadow-lg'>
                        <div className="flex flex-row items-center absolute bottom-[5%] left-[42%] md:top-[40%] md:left-[50%] lg:top-[70%] lg:left-[25%] mt-4 md:mt-0 ml-2 md:ml-0"><AiOutlineInstagram className='ml-2' size={40} /></div>
                    </CustomButton>

                    {/* LinkedIn Button */}
                    <CustomButton dest='https://www.linkedin.com/company/cursorgec/' styling='w-10 shadow-lg'>
                        <div className="flex flex-row items-center absolute bottom-[5%] left-[56%] md:top-[40%] md:left-[55%] lg:top-[70%] lg:left-[28%] mt-4 md:mt-0 ml-3 md:ml-0"><CiLinkedin className='ml-2' size={40} /></div>
                    </CustomButton>
                </div>
                {/* Copyrights Footer */}
                <div>
                    <p className='font-satoshi font-normal absolute bottom-[1%] right-[15%] lg:bottom-[15%] lg:left-[43%] md:bottom-[27%] md:left-[38%]'>© 2023 Technix. All Rights Reserved. </p>
                </div>
            </div>
        </div>
    );
}

export default FooterPage;
