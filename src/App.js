import React,{ useEffect,lazy,Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
// import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
// import ShopPage from "./pages/shop/shop.component";
// import CheckOutPage from "./pages/checkout/checkout.component";

import { getCollectionsForPreview } from "./redux/shop/shop.selector";
import { checkUserSession } from "./redux/user/user.actions";

const HomePage = lazy(()=>import("./pages/homepage/homepage.component"));
const SignInAndSignUp = lazy(()=>import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"));
const ShopPage = lazy(()=>import("./pages/shop/shop.component"));
const CheckOutPage = lazy(()=>import("./pages/checkout/checkout.component"));

const App = (props) => {

  const { checkUserSession,currentUser } = props;

  useEffect(()=>{
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
        {/* <Header currentUser={this.state.currentUser}/> */}
        <Header/>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/sign-in" render={()=>
                currentUser ? (
                <Redirect to="/"/>
                ):(
                <SignInAndSignUp />
                )} />
              <Route exact path="/checkout">
                <CheckOutPage />
              </Route>
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );

}


const mapStateToProps = createStructuredSelector(
  {
    currentUser: getCurrentUser,
    collectionArray:getCollectionsForPreview
  }
);

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: ()=>dispatch(checkUserSession()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
