import React from 'react';
import data from'../data.json'
import Listdetail from './Listdetail'
import { Link } from 'react-router-dom'

var select = "";

class List extends React.Component {
   constructor() {
      super();
      this.state = {
         data,
         showComponent: false,
         selected: "",
      }
      this._onButtonClick = this._onButtonClick.bind(this);
      
      
   }

   

   _onButtonClick(id) {
      
      this.setState({
        showComponent: true,
        selected: id
      });
      select = id
      
    }
   
   render() {

      
      return (

         
         <div>
            
               
               
            <div> 
            <table className="table table-striped">
               <tbody>
                  
                  <tr>
                     
                     <th scope="col">#</th>
                     <th scope="col">Name</th>
                     <th scope="col">Channel</th>
                     <th scope="col">Seasons</th>
                  </tr>
               
               {
                  this.state.data.map((value) =>
               
               <tr key={value.id}>
                  <th>{value.id}</th>
                  <th><Link to="#" onClick={this._onButtonClick.bind(this,value.id)}>{value.name}</Link></th>
                  <th>{value.channel}</th>
                  <th>{value.seasons}</th>
               </tr>
                  )}
               </tbody>
                  

            </table>
            </div>
            
        {this.state.showComponent ?
           <Listdetail idSerie={select}/> :
           
           null
        }
         </div>
      );
   }
}

export default List;