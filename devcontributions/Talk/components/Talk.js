import Image from "next/image";
import Button from "../components/Button"

function Talk({imageLink}) {
    return (
        <div className="relative teamMember max-w-xs p-4 group cursor-pointer flex flex-col items-center">
            <div className="border-8 border-white hover:scale-105 transition-all ease-in-out">
                
                <a href="https://lu.ma/CareerInIt">
                    <Image
                        src={imageLink}
                        width={500}
                        height={500}

                    />
                </a>
            </div>
            
            <div className="my-4">
                <a href="https://lu.ma/CareerInIt"><Button children="Register" style={{boxShadow: "-2px 2px 0 #262626"}}/></a>
            </div>

        </div>
    );
}

export default Talk;
