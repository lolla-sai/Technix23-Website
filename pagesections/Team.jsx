import React, { useContext } from "react";
import HeroText from "@/components/HeroText";
import TeamMember from "../components/TeamMember";
import members from "../data/members";
import { londrinasolid } from "@/data/fonts";

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

            <div className="grid lg:grid-cols-4 md:grid-cols-3 xsm:grid-cols-2 grid-cols-1 gap-1 max-w-6xl mx-auto mb-10">
                {members.map((member) => (
                    <TeamMember {...member} key={member.bio} />
                ))}
            </div>
        </section>
    );
}

export default Team;
