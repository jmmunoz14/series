import React from 'react';

class Listdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            
        }
        

    }

    componentDidMount() {
        
        fetch('../assets/serie-'+this.props.idSerie+'.json')
            .then(response => response.json())
            .then(parsedJson => this.setState(parsedJson))
    }

    componentDidUpdate() {
        
        fetch('../assets/serie-'+this.props.idSerie+'.json')
            .then(response => response.json())
            .then(parsedJson => this.setState(parsedJson))
    }


    render() {

        return (


            <div className="card" >
                <img className="card-img-top" src={ this.state.poster }>
                </img>
                    <div className="card-body">
                        <h5 className="card-title">{ this.state.name }</h5>
                        <p className="card-text">{ this.state.description }</p>
                        <a href={this.state.webpage}>{ this.state.webpage }</a>
                    </div>
            </div>


                );
             }
          }
          
export default Listdetail;