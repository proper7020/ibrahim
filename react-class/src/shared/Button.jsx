



function Button (props){
    return(
    //     <button
    //     style= {{
    //         background:"black" ,
    //         color:"white",
    //         border:"none", 
    //         padding:"15px 50px",
    //         borderRadius:"5px"
    //     }}
    
    // >
    // Sign Up
    // </button>
    <button 
    style={{
        background: props.bgColor,
        color: props.textColor,
        // text:props.text,
        border:"none",
        padding:"15px 50px",
        borderRadius:"5px"

    }}>
        {props.text}
    </button>

    )
}
export default Button