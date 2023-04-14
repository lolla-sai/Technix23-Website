import Image from "next/image";
import Button from "../components/Button"

function Talk({image,registrationLink}) {
    return (
        <div className="relative teamMember max-w-xs p-4 group cursor-pointer flex flex-col items-center">
            <div className="border-8 border-[#ffb808] hover:scale-105 transition-all ease-in-out">
                
                <a href={registrationLink} target="_blank">
                    <Image
                        src={image}
                        width={500}
                        height={500}

                    />
                </a>
            </div>
            
            <div className="my-4">
                <a href={registrationLink} target="_blank"><Button children="Register" style={{boxShadow: "-2px 2px 0 #262626"}}/></a>
            </div>

        </div>
    );
}

export default Talk;
