import React, { useContext } from "react";
import HeroText from "@/components/HeroText";
import TeamMember from "../components/TeamMember";
import members from "../data/members";
import { londrinasolid } from "@/data/fonts";
import teamDetails from "../data/teamsnew.json";
import TeamFlipCard from "@/components/TeamFlipCard";

function Team() {
    return (
        <section id="team" className="p-12 bg-[#1E1E1E] relative ">
            <HeroText
                text="The Team"
                className={
                    londrinasolid.className +
                    " text-md-7xl text-5xl mx-auto w-fit my-12"
                }
            />

            <div className="grid lg:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-4 max-w-4xl mx-auto mb-10">
                {/* {members.map((member) => (
                    <TeamMember {...member} key={member.bio} />
                ))} */}
                {teamDetails["website"].map((dev, index) => (
                    <TeamFlipCard key={index} {...dev} />
                ))}
            </div>
        </section>
    );
}

export default Team;
