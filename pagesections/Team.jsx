import React, { useContext } from "react";
import HeroText from "@/components/HeroText";
import TeamMember from "../components/TeamMember";
import members from "../data/members";
import { londrinasolid } from "@/data/fonts";
import teamDetails from "../data/teamsnew.json";
import TeamFlipCard from "@/components/TeamFlipCard";
import Button from "@/components/Button";
import Link from "next/link";

function Team() {
    return (
        <section id="team" className="md:p-12 p-6 bg-[#1E1E1E] relative ">
            <HeroText
                text="The Team"
                className={
                    londrinasolid.className +
                    " text-md-7xl text-5xl mx-auto w-fit my-12"
                }
            />

            <p className=" text-xl md:text-3xl text-white text-center font-satoshi">
                The team is what makes teamcursor.
            </p>

            <div className="mx-auto text-center my-12">
                <Button>
                    <Link href="/team" className={londrinasolid.className}>
                        See the Full Team
                    </Link>
                </Button>
            </div>

            {/* <div className="grid lg:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-4 max-w-4xl mx-auto mb-10"> */}
            {/* {members.map((member) => (
                    <TeamMember {...member} key={member.bio} />
                ))} */}
            {/* {teamDetails["website"].map((dev, index) => (
                    <TeamFlipCard key={index} {...dev} />
                ))} */}
            {/* </div> */}
        </section>
    );
}

export default Team;
