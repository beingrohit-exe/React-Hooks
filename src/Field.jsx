const Field = ({label, type, value, onChange}) => {
    return (
        // <div className='field-div'>
        //     <span>{props.label}</span>
        //     <input type={props.type} />
        // </div>

        <div className='field-div'>
            <span>{label}</span>
            <input type={type} value={value} onChange={onChange}/>
        </div>
    )
}

export default Field;