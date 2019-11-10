import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getAllUsers} from '../../redux/actions';
import { Card , CardTitle} from 'material-ui/Card';
import _ from 'lodash';
import './Dashboard.css';



// const HomeModal = props => {
//     return (
    //   <div className={props.show === true? "modal display-block" : "modal display-none"} style={{zIndex: "10000"}}>
    //     <section className="modal-main">
    //       <h4>{props.postSelected.id}</h4>
    //       <button onClick={props.handleClose} variant="contained" color="secondary">close</button>
    //     </section>
    //   </div>
//     )
//   };

class Dashboard extends Component{

    componentDidMount(){
        this.props.getAllUsers();
    }

    
    
  handleOpen = (event) => {
    event.preventDefault();
    let postId = event.target.id;
    console.log(postId);
    const AdDetails = Object.values(this.props.usersReducer);
    console.log(AdDetails)
    const selected = [{id:22222}];//AdDetails.filter( ad => {ad.id === postId});
        return (
            <div className={"modal display-block"} style={{zIndex: "10000"}}>
                <section className="modal-main">
                    <h4>kmkmkm
                    {/* {selected[0].id} */}
                    </h4>
                    <button onClick={this.handleClose} variant="contained" color="secondary">close</button>
                </section>
            </div>
      );
  };

  /**
   * @description close moda 
   */
  handleClose = () => {
    this.props.selectedPostReducer(null, false);
  };

    renderUsers() {
       return _.map(this.props.usersReducer, user => {
         return (
              <div className="news-container" data-news={user.id} key={user.id}>
                <div className="news-grid" key={user.id}>
                    <div className="news-header">
                        <h4><strong>file Number : {user.fileNumber}</strong></h4>
                        <p><strong>Address:</strong>{(user.address !== null )?user.address:"The house address is not registered"}</p>
                            {/* <button className="btn-post" id={user.id}  onClick={this.handleOpen}>read more</button> */}
                    </div>
                </div>  
            </div>
           );
       });
    }


    render(){
        const AdDetails = Object.values(this.props.usersReducer);
        return(
            <div>
                <h2>dashboard</h2>
                <div className="post-loc">
                <CardTitle  title="New Posts" subtitle="recent most important news about our group" />
                    {AdDetails.length > 0 ? this.renderUsers():
                        <Card>
                            <CardTitle>please wait Asan Shahr API is loading ...</CardTitle>
                        </Card>
                    }
                </div>
                {/* <HomeModal show={this.state.open} handleClose={this.handleClose} postSelected={{id:1} this.state.postSelected}/> */}
            </div>
        )
    }
}

const mapStateToPreps = state => {
    return{usersReducer: state.usersReducer,
    selectedPostReducer: state.selectedPostReducer};
}
export default connect(mapStateToPreps, {getAllUsers}) (Dashboard);