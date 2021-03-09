import './Backdrop.css'

const Backdrop = ({ show, click }) => {
    {/* shwo && if show is true then do  <div className="backdrop"></div> */}
    return show && <div className="backdrop" onClick={click}></div> 
    
}

export default Backdrop;
