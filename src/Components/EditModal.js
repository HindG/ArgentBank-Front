function EditModal(props) {
    return (
        <div className="edit-modal">
            <div className="exit-modal" onClick={() => props.displayHideEditModal()}>x</div>
            <div className="exit-modal-title">Edit Name</div>
            <form>
                <div className="exit-modal-title-formdata">
                    <label htmlFor="first">Firstname</label>
                    <input className="text-control" type="text" id="first" name="first" onChange={e => props.setInputFirstname(e.target.value)} />
                </div>
                <div className="exit-modal-title-formdata">
                    <label htmlFor="last">Lastname</label>
                    <input className="text-control" type="text" id="last" name="last" onChange={e => props.setInputLastname(e.target.value)} />
                </div>
            </form>
            <button className="edit-button" onClick={(e) => props.saveNameChange(e)}>Save</button>
        </div>
    )
}

export default EditModal;