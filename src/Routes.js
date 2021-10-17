import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import AddProduct from "./Add";
import Edit from "./Edit";
import Home from "./Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Product from "./Product";

const Routes = (props) => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <img src="https://fpt.edu.vn/Content/images/assets/Poly.png"alt="photo" style={{height:"40px"}}/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" activeClassName="active" className="nav-link" exact>
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" activeClassName="active" className="nav-link">
                                    Sản phẩm
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product/add" activeClassName="active" className="nav-link">
                                    Thêm sản phẩm
                                </NavLink>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <NavLink to="/signup" activeClassName="active" className="nav-link">
                                Đăng ký
                            </NavLink>

                            <NavLink to="/signin" activeClassName="active" className="nav-link">
                                Đăng nhập
                            </NavLink>
                        </form>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/product">
                    <Product {...props} />
                </Route>
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
            </Switch>
        </Router>
    )
};
export default Routes;