import React, {Component} from 'react';
import Song from '../components/Song';
import Top20List from '../components/Top20List';

export default class Top20 extends Component{

    constructor(props){
        super(props);
        this.state = {
            top20 : []
        }
    }

    componentDidMount(){
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
        
        fetch(url)
            .then(response => response.json())
            .then(top20API => this.setState({top20: top20API.feed.entry}))
            .catch(err => console.error)
    }

    render(){

        return(
            <div>
                <h1>iTunes Top 20</h1>
                <Top20List top20={this.state.top20}/>
            </div>
        )
    }



}