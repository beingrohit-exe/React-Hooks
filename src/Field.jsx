const Field = ({label, type}) => {
    return (
        // <div className='field-div'>
        //     <span>{props.label}</span>
        //     <input type={props.type} />
        // </div>

        <div className='field-div'>
            <span>{label}</span>
            <input type={type}/>
        </div>
    )
}

export default Field;