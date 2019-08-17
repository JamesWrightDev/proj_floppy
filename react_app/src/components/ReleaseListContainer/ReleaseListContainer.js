import React, { Component } from 'react'
import ReleaseListItem from './ReleaseList/ReleaseListItem';
import axios from 'axios';
import { connect, dispatch } from 'react-redux';
class ReleaseListContainer extends Component {

    state = {
        data:[],
        loading: true
      }

    componentDidMount(){
        axios.get('http://localhost:3001/new', { crossdomain: true })
            .then(res => {
                const data = res.data.comics;
                console.log(data);
                this.setState({
                    ...this.state,
                    data,
                    loading: false
                     });

            }).catch(error => {
                console.log(error);
            })
  }


    render() {
        console.log(this.props.consumApi);

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
        consumApi: (data) => dispatch({ type: '@CONSUME_API', payload: data } )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReleaseListContainer)