function Modal({modal,setModal}) {
    return (
        <>
         <h1 >Modal {modal}</h1>
        <button onClick={()=> setModal(!modal)}>Back</button>
        </>
       
    )
}
export default Modal