import React, { Component } from 'react';
import SquareListView from './squareListView'
import gitHubService from '../../../shared/service/GitHubService';

class SquareListComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        gitHubService.listAll().then(
            it => {
                const result =  it.map((element) => {
                    let {id, name, language, html_url} = element;
                    return {id, name, language, html_url}
                })
                this.setState({
                    projects: result.slice(0, 9)
                })
            }
        )
    }

    render() {
        return (
            <>
                <SquareListView projects={this.state.projects} />   
            </>
        );
    }
}

export default SquareListComponent;