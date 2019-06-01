import React, { Component } from 'react'
import ReleaseListItem from './releaseListItem';
import axios from 'axios';
export default class releaseListContainer extends Component {
    state = {
        data:[],
        loading: true
      }

    componentDidMount(){
        axios.get('https://api.shortboxed.com/comics/v1/previous', { crossdomain: true })
            .then(res => {
                const data = res.data.comics;
                this.setState({
                    data,
                    loading: false
                     });

            }).catch(error => {
                console.log(error);
            })
  }




    render() {
        return (
            <div>
                <h3>New Releases</h3>
                {this.state.data.map((item,index) => (
                    <ReleaseListItem
                        title={item.title}
                        price={item.price}
                        key={Math.random}
                        publisher={item.publisher}
                    />
                ))}

            </div>
        )
    }
}
