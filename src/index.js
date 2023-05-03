
// import { useLocation } from "react-router-dom";
// import HomeV1 from "./components/home-v1";
// import HomeV3 from "./components/home-v3";
// import HomeV4 from "./components/home-v4";
// import HomeV5 from "./components/home-v5";
// import HomeV6 from "./components/home-v6";
// import HomeV7 from "./components/home-v7";
// import HomeV8 from "./components/home-v8";
// import HomeV9 from "./components/home-v9";
// import HomeV10 from "./components/home-v11";

// import ServiceDetails from "./components/service-details";
// import Portfolio from "./components/portfolio";
// import PortfolioV2 from "./components/portfolio-v2";
// import PortfolioDetails from "./components/portfolio-details";
// import Team from "./components/team";
// import TeamDetails from "./components/team-details";
// import ComingSoon from "./components/coming-soon";
// import Error from "./components/404";
// import Location from "./components/location";

// import Shop from "./components/shop";
// import ShopGrid from "./components/shop-grid";
// import ProdductDetails from "./components/product-details";
// import ShopLeftSidebar from "./components/shop-left-sidebar";
// import ShopRightSidebar from "./components/shop-right-sidebar";

// import BlogGrid from "./components/blog-grid";
// import BlogLeftSidebar from "./components/blog-left-sidebar";
// import BlogRightSidebar from "./components/blog-right-sidebar";
// import Blog from "./components/blog";

// import BlogDetails from "./components/blog-details";
// import Cart from "./components/cart";
// import Checkout from "./components/checkout";
// import MyAccount from "./components/my-account";
// import Login from "./components/login";
// import Register from "./components/register";
// import AddListing from "./components/add-listing";
// import Wishlist from "./components/wishlist";
// import OrderTracking from "./components/order-tracking";
// import History from "./components/history";
// import TestComponent from "./components/test";


import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter ,Router,
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import HomeV2 from "./components/home-v2";
import PrivacyPolicy from "./components/shop-components/privacy-policy";
import GetAdemo from "./components/shop-components/getademo";
import Contact from "./components/contact";
import TOS from "./components/shop-components/termsofservices";
import Faq from "./components/faq";
import About from "./components/about";
import Service from "./components/service";

//
import InventoryManagement from './components/V2/service-module/Inventory/inventory-management.js'
import CommissionManagement from './components/V2/service-module/Commision/commision-management.js'
import PaymentPlan from './components//V2/service-module/PaymentPlan/payment-plan.js'
import StaffManagement from './components//V2/service-module/StaffMangement/staff-mangement.js'
import ReportManagement from './components//V2/service-module/ReportManagment/report-managment'
import SalesTarget from './components/V2/service-module/SalesTarget/sales-target.js'
// 
import SellWithUs from "./components/V2/Sellwithus/sell-with-us";


//redux 
import { Provider } from "react-redux";
import store from "./store";

// sass
import "react-modal-video/scss/modal-video.scss";

const Root = () => {

  return (
    // <HashRouter basename="/">
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomeV2} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/inventory-management" component={InventoryManagement} />
          <Route path="/commission-management" component={CommissionManagement} />
          <Route path="/digital-tools" component={PaymentPlan} />
          <Route path="/staff-management" component={StaffManagement} />
          <Route path="/report-management" component={ReportManagement} />
          <Route path="/sales-target" component={SalesTarget} />
          <Route path="/crm" component={SellWithUs} />
          <Route path="/faq" component={Faq} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/how-to-use" component={GetAdemo} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={TOS} />
          <Route path="*" component={HomeV2} />
          {/* <Route path="/home-v2" component={HomeV2} />
                        <Route path="/home-v3" component={HomeV3} />
                        <Route path="/home-v4" component={HomeV4} />
                        <Route path="/home-v5" component={HomeV5} />
                        <Route path="/home-v6" component={HomeV6} />
                        <Route path="/home-v7" component={HomeV7} />
                        <Route path="/home-v8" component={HomeV8} />
                        <Route path="/home-v9" component={HomeV9} />
                        <Route path="/home-v10" component={HomeV10} /> */}

          {/* <Route path="/service-details" component={ServiceDetails} /> */}
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          {/* <Route path="/portfolio-v2" component={PortfolioV2} /> */}
          {/* <Route path="/portfolio-details" component={PortfolioDetails} /> */}
          {/* <Route path="/team" component={Team} /> */}
          {/* <Route path="/team-details" component={TeamDetails} /> */}

          {/* <Route path="/coming-soon" component={ComingSoon} /> */}
          {/* <Route path="/404" component={Error} /> */}
          {/* <Route path="/location" component={Location} /> */}
          {/* <Route path="/shop" component={Shop} /> */}
          {/* <Route path="/shop-grid" component={ShopGrid} /> */}
          {/* <Route path="/shop-left-sidebar" component={ShopLeftSidebar} /> */}
          {/* <Route path="/shop-right-sidebar" component={ShopRightSidebar} /> */}

          {/* <Route path="/product-details" component={ProdductDetails} /> */}
          {/* blog */}
          {/* <Route path="/blog-grid" component={BlogGrid} /> */}
          {/* <Route path="/blog-left-sidebar" component={BlogLeftSidebar} /> */}
          {/* <Route path="/blog-right-sidebar" component={BlogRightSidebar} /> */}
          {/* <Route path="/blog" component={Blog} /> */}

          {/* <Route path="/blog-details" component={BlogDetails} /> */}

          {/* <Route path="/cart" component={Cart} /> */}
          {/* <Route path="/checkout" component={Checkout} /> */}
          {/* <Route path="/my-account" component={MyAccount} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
          {/* <Route path="/add-listing" component={AddListing} /> */}
          {/* <Route path="/wishlist" component={Wishlist} /> */}
          {/* <Route path="/order-tracking" component={OrderTracking} /> */}
          {/* <Route path="/history" component={History} /> */}
        </Switch>
      </div>
      {/* </HashRouter> */}
    </BrowserRouter>
  );
}
// }

export default Root;

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById("quarter"));
