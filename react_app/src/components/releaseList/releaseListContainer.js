import React, { Component } from 'react'
import ReleaseListItem from './releaseListItem';
import axios from 'axios';
import { connect } from 'react-redux';
class releaseListContainer extends Component {
    state = {
        data:[],
        loading: true
      }

    componentDidMount(){
        axios.get('http://localhost:3001', { crossdomain: true })
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
                {/* <h2>{this.props.comics}</h2> */}
                <h3>New Releases</h3>
                {/* <button onClick={this.props.addComic}>VUTTON</button> */}

                {this.state.data.map((item,index) => (
                    <ReleaseListItem
                        title={item.title}
                        price={item.price}
                        key={Math.random()}
                        publisher={item.publisher}
                        addComic={this.props.addComic}
                    />
                ))}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { comics } = state
    return { comics }
  }
function mapDispatchToProps(dispatch){
    return{
        addComic: (data) => dispatch({ type: 'ADD_COMIC', payload: data } )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(releaseListContainer)