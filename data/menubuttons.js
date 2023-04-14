const { londrinasolid } = require("./fonts");

const menuButtons = [
    {
        href: "../",
        title: "Home",
        className:
            "text-center block md:text-5xl text-3xl text-white " +
            londrinasolid.className,
    },
    {
        href: "../#about",
        title: "About Technix",
        className:
            "text-center block md:text-5xl text-3xl text-white " +
            londrinasolid.className,
    },
    {
        href: "../#events",
        title: "Events",
        className:
            "text-center block md:text-5xl text-3xl text-white " +
            londrinasolid.className,
    },
    {
        href: "../#schedule",
        title: "Schedule",
        className:
            "text-center block md:text-5xl text-3xl text-white " +
            londrinasolid.className,
    },
    {
        href: "../#sponsors",
        title: "Our Sponsors",
        className:
            "text-center block md:text-5xl text-3xl text-white " +
            londrinasolid.className,
    },
    // {
    //     href: "../#team",
    //     title: "Team",
    //     className:
    //         "text-center block md:text-5xl text-3xl text-white " +
    //         londrinasolid.className,
    // },
    {
        href: "/",
        title: "Download Brochure",
        className:
            "text-center block md:text-3xl text-xl bg-[#FF6955] text-black rounded-full px-2 py-1 " +
            londrinasolid.className,
        download: true,
    },
];

export default menuButtons;
