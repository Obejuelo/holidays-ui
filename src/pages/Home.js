import React, {Component} from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Cards from '../components/Cards'
import Spinner from '../components/Spinner'

import {connect} from 'react-redux'
import {getHoliday, setSpinner} from '../redux/actions'

class Home extends Component {

    _getHolidays = (country, year, month) => {
        this.props.setSpinner(true)
        fetch(`https://ob-holidays.herokuapp.com/holiday/${year}/${country}/${month}`)
            .then(res => res.json())
            .then(data => {
                this.props.setSpinner(false) // Usamos las acciones de redux
                this.props.getHoliday(data)

                if(data.length === 0) {
                    document.getElementById('no-results').innerHTML = 'No results'
                    setTimeout(() => {
                        document.getElementById('no-results').innerHTML = ''
                    }, 3000);
                }
            })
            .catch(err => {
                console.log(err)
                this.props.setSpinner(false)
            })
    }

    noResults = () => {

    }

    render() {
        // Utilizamos las props del estado de redux
        return(
            <div>
                <Header/>
                <Form getHolidays={this._getHolidays}/>
                {this.props.spinner ? <Spinner/> : ''}
                <Cards holiday={this.props.holiday}/>
                <div id="no-results"></div>
            </div>
        )
    }
}

const mapeStateToProps = (state) => {
    return {
        holiday: state.holiday,
        spinner: state.spinner
    }
}

const mapDispatchToProps = {getHoliday, setSpinner}

export default connect(mapeStateToProps, mapDispatchToProps)(Home)