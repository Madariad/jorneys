import "./style.css"
import NavbarTop from "../Navbar/NavbarTop/NavbarTop";
import NavbarButton from "../Navbar/NavbarButton/NavbarButton";
import Content from "../Content/Content";
import Footer from "../Footer/footer";

function RightContent() {
    return (
        <div className="RightContent">
              <NavbarTop />
              <NavbarButton />
              <Content />
              <Footer />
        </div>
    )
}
export default RightContent