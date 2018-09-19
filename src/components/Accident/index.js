import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../Loader';
import TotalNumber from '../TotalNumber/index';
import Severity from '../Severity';
import TimeOfYear from '../TimeOfYear';
import './style.css'

class Accident extends Component{

    choiceYearTemplate = () => {
        return (
            <div>
                <h2></h2>
            </div>
        )
    };

    accidentInformationTemplate = (accidentData) => {
        return (
            <div className="accident-data">
                <TotalNumber totalNumber={accidentData.entities.length}/>
                <Severity accidentDataArray={[...accidentData.entities]}/>
                <TimeOfYear accidentDataArray={[...accidentData.entities]}/>
            </div>
        )
    };

    errorTemplate = () => {
        return (
            <div>
                <h2>Error, try to select some other year or send a request one more time</h2>
            </div>
        )
    };

    render(){
        const {accidentData} = this.props;
        console.log(accidentData.entities);

        if(!Array.isArray(accidentData.entities)){
            return this.errorTemplate();
        }

        if(!accidentData.loading && !accidentData.loaded){
            return this.choiceYearTemplate();
        }

        if(accidentData.loading && !accidentData.loaded){
            return <Loader />
        }

        if(accidentData.loaded && !accidentData.loading){
            return this.accidentInformationTemplate(accidentData);
        }

        if(!accidentData.error){
            return this.errorTemplate();
        }
    }
}

function mapStateToProps(state, ownProps){
    return {
        accidentData: state.accidentData
    }
}


export default connect(mapStateToProps)(Accident);