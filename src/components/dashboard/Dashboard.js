import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllAds} from '../../redux/actions';
import { Card , CardTitle} from 'material-ui/Card';
import _ from 'lodash';
import './Dashboard.css';



class Dashboard extends Component{

    /**
     * @description get data from API with redux thunk
     */
    componentDidMount(){
        this.props.getAllAds();
    }

    /**
     * show a simple information of per form
     */
    renderAds() {
       return _.map(this.props.adsReducer, ads => {
         return (
              <div className="news-container" data-news={ads.id} key={ads.id}>
                <div className="news-grid">
                    <div className="news-header">
                        <h4><strong>file Number : {ads.fileNumber}</strong></h4>
                        <p><strong>Address:</strong>{(ads.address !== null )?ads.address:"The house address is not registered"}</p>
                            {/* <button className="btn-post" id={ads.id}  onClick={this.handleOpen}>read more</button> */}
                    </div>
                </div>  
            </div>
           );
       });
    }


    render(){
        const AdDetails = Object.values(this.props.adsReducer);
        return(
            <div>
                <div className="header-dashboard">
                    <h2>DASHBOARD</h2>
                </div>
                <div className="post-loc">
                <CardTitle  title="New Posts" subtitle="recent most important news about our group" />
                    {AdDetails.length > 0 ? this.renderAds():
                        <Card>
                            <CardTitle>please wait Asan Shahr API is loading ...</CardTitle>
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToPreps = state => {
    return{adsReducer: state.adsReducer};
}
export default connect(mapStateToPreps, {getAllAds}) (Dashboard);