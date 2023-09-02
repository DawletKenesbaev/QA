function Modal({modal,setModal}) {
    return (
        <h1 onClick={()=> setModal(!modal)}>Modal {modal}</h1>
    )
}
export default Modal