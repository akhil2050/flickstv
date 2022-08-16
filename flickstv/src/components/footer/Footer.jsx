import "./footer.scss";
import { Facebook,Instagram, Twitter, YouTube } from "@material-ui/icons";


function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="fcolum">
            <img className="logo"
            src="assets/logo.png"
            alt="logo"
            />
            <p>Movies &amp; TV Shows, Online cinema,
            Series, Live TV, Streaming Library</p>
            <ul className="socialm">
                <li><a href="#">
                <Facebook className="icons" />
                </a></li>
                <li><a href="#">
                <Instagram className="icons"/>
                </a></li>
                <li><a href="#">
                <YouTube className="icons"/>
                </a></li>
                <li><a href="#">
                <Twitter className="icons"/>
                </a></li>
            </ul>
            </div>
            <div className="fcolum">
                <h3>FlicksTv</h3>
                <a href="#">About us</a>
                <a href="#">My profile</a>
                <a href="#">Pricing plans</a>
                <a href="#">Contact us</a>
            </div>
            <div className="fcolum">
                <h3>Browse</h3>
                <a href="#">Live TV</a>
                <a href="#">Series</a>
                <a href="#">Movie</a>
                <a href="#">Streaming Library</a>
            </div>
            <div className="fcolum">
                <h3>Help</h3>
                <a href="#">Account &amp; Billing</a>
                <a href="#">Plans &amp; Pricing</a>
                <a href="#">Supported devices</a>
                <a href="#">Accessibility</a>
            </div>
        </div>
        <div className="container-socket">
            <p>Copyright ©FilcksTv 2022 All rights reserved </p>
        </div>
    </div>
  )
}

export default Footer