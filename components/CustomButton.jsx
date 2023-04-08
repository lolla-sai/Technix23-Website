import Link from "next/link";

function CustomButton({styling,dest,style,children}){

    var defaultStyles = 'flex flex-row items-center justify-center inline-block '
    var finalStyles = `${defaultStyles} ${styling}`
    return(
        <>
            <Link href={dest} className={finalStyles} style={style}>{children}</Link>
        </>
    );
}
export default CustomButton
