import React, {Component} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getSection } from "../../redux/directory/directory.selector";

import "./directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component{

    // state = {
    //     section:[
    //         {
    //           title: 'hats',
    //           imageUrl: 'https://posterstore.eu/images/zoom/353.jpg',
    //           id: 1,
    //           linkUrl: 'shop/hats'
    //         },
    //         {
    //           title: 'jackets',
    //           imageUrl: 'https://rukminim1.flixcart.com/image/352/352/jqjszgw0/poster/x/g/r/medium-pwl-seether-13-19-inches-music-wall-poster-fine-quality-original-imafyuvwgybczzzg.jpeg?q=70',
    //           id: 2,
    //           linkUrl: 'shop/jackets'
    //         },
    //         {
    //           title: 'sneakers',
    //           imageUrl: 'https://images.unsplash.com/photo-1576215291422-016bc582e3d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    //           id: 3,
    //           linkUrl: 'shop/sneakers'
    //         },
    //         {
    //           title: 'womens',
    //           imageUrl: 'https://images.squarespace-cdn.com/content/v1/54cb6b08e4b0c436386e3f3c/1548743635600-ZV1E6FPZQQPIJPAWA4LZ/ke17ZwdGBToddI8pDm48kGYrl6w8rr3ZeZNdAXjjMssUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc9ZJD-3LA1G0OuphVRhzBCuDLSmyZ2xCXotO7fcuY__6qeLIfiu52UkfF26RJX6pW/Ellyse+Perry-4227R.jpg?format=2500w',
    //           size: 'large',
    //           id: 4,
    //           linkUrl: 'shop/womens',
    //           size: 'large'
    //         },
    //         {
    //           title: 'mens',
    //           imageUrl: 'https://i.pinimg.com/originals/1e/c1/0f/1ec10fc4382d41027f578f8e837f9377.jpg',
    //           size: 'large',
    //           id: 5,
    //           linkUrl: 'shop/mens',
    //           size: 'large'
    //         }
    //       ]
    // };

    loadSection = () => {

        const sections = this.props.section.map((item,id)=>{
            return <MenuItem key={'section_'+id} {...item}/>;
        });

        return sections;


    };

    render(){

        return (
            <div className="directory-menu">
                {this.loadSection()}
            </div>
        );

    }

}

const setStateToProps = createStructuredSelector({
  section: getSection
});

export default connect(setStateToProps)(Directory);