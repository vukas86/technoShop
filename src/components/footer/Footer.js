import "./Footer.css";
import NewsLetter from "./NewsLetter";
import Info from "./Info";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <NewsLetter />
        <Info />
      </div>
    </div>
  );
}
export default Footer;
