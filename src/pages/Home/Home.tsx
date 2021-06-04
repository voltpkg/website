import Logo  from "../../assets/Logo.svg"
import "./Home.css"
export const Home = () => {
    return (
        <div className="home">
            <div className="nav">
                <img src={Logo} alt="" width="50em" className="logo"/>
            </div>
            <div className="homemain">
                <h2>Fastest NodeJS package manager</h2>
                <div className="search">
                    <input type="text" className="packagesearch" placeholder="Search"/>
                    <div className="popsearch">Popular Searches: <a href="/">volt</a> <a href="/">solidjs</a> <a href="/">react</a></div>
                </div>
            </div>
        </div>
    )    
}