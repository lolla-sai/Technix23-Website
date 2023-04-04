function CustomButton({styling,dest,children}){

    var defaultStyles = 'flex flex-row items-center justify-center inline-block '
    var finalStyles = `${defaultStyles} ${styling}`
    return(
        <>
            <a href={dest} className={finalStyles}>{children}</a>
        </>
    );
}
export default CustomButton