import React,{Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import { auth,createUserProfileDocument } from "./fiebase/fiebase.utils";

class App extends Component {

  // state = {
  //   currentUser:null
  // };

  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      // this.setState({currentUser:user});
      // console.log(user);

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{

          this.props.setCurrentUser(
            {
              id:snapShot.id,
              ...snapShot.data()
            }
          );

          // this.setState({
          //   currentUser:{
          //     id:snapShot.id,
          //     ...snapShot.data()
          //   }
          // });

        })


      }
      else{
        
        this.props.setCurrentUser(userAuth);

        // this.setState({currentUser:userAuth});

      }

      

    });
    
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();

  }

  render(){

    return (
      <div>
        {/* <Header currentUser={this.state.currentUser}/> */}
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/shop">
            <ShopPage />
          </Route>
          <Route exact path="/sign-in" render={()=>
            this.props.currentUser ? (
            <Redirect to="/"/>
            ):(
            <SignInAndSignUp />
            )} />
        </Switch>
      </div>
    );

  }

}

const mapStateToProps = state => {

  return ({
    currentUser: state.user.currentUser
  });

}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => {

      return dispatch(setCurrentUser(user));
  
    } 

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
