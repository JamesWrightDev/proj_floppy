import React, { Component } from 'react'
import ReleaseListItem from './ReleaseList/ReleaseListItem';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { consumeApi } from '../../redux/actions/index';

class ReleaseListContainer extends Component {
    constructor(props){
        super(props);

    this.state = {
        loading: true
      }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/new', { crossdomain: true })
            .then(res => {
                const data = res.data.comics;
                this.props.dispatch({type: '@CONSUME_API', payload: data});
            }).catch(error => {
                console.log(error);
            })
  }


    render() {
        return (
            <div>
                <h3>New Releases</h3>
                { this.props.data && this.props.data.map((item) => (
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

const  mapStateToProps = state => {
    const { data } = state
    return { data }
}

export default connect(mapStateToProps)(ReleaseListContainer)