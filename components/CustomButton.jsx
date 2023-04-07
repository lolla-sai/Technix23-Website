import Link from "next/link";

function CustomButton({ styling, dest, children }) {
    var defaultStyles = "flex items-center justify-center ";
    var finalStyles = `${defaultStyles} ${styling}`;
    return (
        <>
            <Link href={dest} className={finalStyles}>
                {children}
            </Link>
        </>
    );
}

export default CustomButton;
