import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import MainScreen from "./screens/MainScreen";
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PaymentScreen from "./screens/PaymentScreen";
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';


function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <div className='banner_bg_main'>
            <div className='container'><header>
            <div className = "header_section_top">
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto  w-100  justify-content-end">
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to="/admin/dashboard">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/products">
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orders">
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/users">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>
          </header>
          </div>
          <div className="logo_section">
              <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                      <div className="logo"> <LinkContainer to="/">
                      <Navbar.Brand>SHOPiT</Navbar.Brand>
                      </LinkContainer> </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div id="mySidenav" className="sidenav">
                     <a>Home</a>
                     <a>Fashion</a>
                     <a>Electronic</a>
                     <a>Jewellery</a>
                  </div>
                  <span className="toggle_icon">
                    <Button
                  variant="dark"
                  onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                >
                  <i className="fas fa-bars"></i>
                </Button>
                  </span>
                  <div className="dropdown">
                     <button className = "btn btn-secondary" aria-expanded="false">
                          {userInfo ? (
                            <div>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                                  <LinkContainer to="/profile">
                                    <NavDropdown.Item>User Profile</NavDropdown.Item>
                                  </LinkContainer>
                                  <LinkContainer to="/orderhistory">
                                    <NavDropdown.Item>Order History</NavDropdown.Item>
                                  </LinkContainer>
                                  <NavDropdown.Divider />
                                  <Link
                                    className="dropdown-item"
                                    to="#signout"
                                    onClick={signoutHandler}
                                  >
                                    Sign Out
                                  </Link>
                                </NavDropdown>
                            </div>
                        ) : (
                          <Link className="nav-link" to="/signin">
                            Sign In
                          </Link>
                        )} 
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item">Action</a>
                        <a className="dropdown-item">Another action</a>
                        <a className="dropdown-item">Something else here</a>
                     </div>
                  </div>
                  <div className="main">
                     <div className="">
                         <SearchBox />
                     </div>
                  </div>
                  <div className="header_box">
                     <div className="lang_box ">
                        <a title="Language" className="nav-link" data-toggle="dropdown" aria-expanded="true">
                        {/* <img src="images/flag-uk.png" alt="flag" class="mr-2 " title="United Kingdom"> English <i class="fa fa-angle-down ml-2" aria-hidden="true"></i> */}
                        </a>
                        <div className="dropdown-menu ">
                           <a className="dropdown-item">
                           {/* <img src="images/flag-france.png" class="mr-2" alt="flag"> */}
                           French
                           </a>
                        </div>
                     </div>
                     <div className="login_menu">
                        <ul>
                           <li>
                              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              <span className="padding_10">
                                <Link to="/cart" className="">
                                  Cart
                                  {cart.cartItems.length > 0 && (
                                    <Badge pill bg="danger">
                                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                    </Badge>
                                  )}
                                </Link>
                              </span>
                           </li>
                           <li><a>
                              <i className="fa fa-user" aria-hidden="true"></i>
                              <span className="padding_10">Cart</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                 <LinkContainer
                  to={{
                    pathname: "/search",
                    search: `?category=${category}`,
                  }}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
              </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <MainScreen />
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />              
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>              
              <Route path="/payment/:id" element = {<PaymentScreen />}></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
               <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;