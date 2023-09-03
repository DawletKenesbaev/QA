function Modal({modal,setModal}) {
    return (
        <>
         <h1 >Modal www </h1>
        <button onClick={()=> setModal(!modal)}>Back</button>
        </>
       
    )
}
export default Modal