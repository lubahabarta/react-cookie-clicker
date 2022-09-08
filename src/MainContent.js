import cookie from "./cookie.svg"

const MainContent = ({ cookies, cps, handleCookieClick }) => {

    return ( 
        <div className="main-content">
            <h1>{ cookies.toLocaleString('en-US') } Cookies</h1>
            <p>+ { cps.toLocaleString('en-US') } cps</p>
            <img src={ cookie } alt="cookie" className="cookie" onClick={ () => handleCookieClick() }/>
        </div>
     );
}
 
export default MainContent;