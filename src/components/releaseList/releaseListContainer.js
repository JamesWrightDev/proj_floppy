import React, { Component } from 'react'
import ReleaseListItem from './releaseListItem';
import axios from 'axios';
export default class releaseListContainer extends Component {
    state = {
      }

    componentDidMount(){
        axios.get('https://api.shortboxed.com/comics/v1/new', { crossdomain: true })
            .then(res => {
                const data = res.data;
                this.setState({ data });
            }).catch(error => {
                console.log(error);
            })
  }



    render() {
        return (
            <div>
                <h3>New Releases</h3>
                {this.state.data.comics.map((item,index) => (
                    <ReleaseListItem/>
                ))}
                <ReleaseListItem/>
            </div>
        )
    }
}
