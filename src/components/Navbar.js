import React from 'react';

class Navbar extends React.Component {
   constructor() {
      super();
      this.state = {
         
      }
   }
   render() {
      return (
         <div>
            <nav className="navbar navbar-light bg-info">
                <a className="navbar-brand" href="#">
                    <img src="https://pbs.twimg.com/profile_images/993674618652254208/dYmlscab_400x400.jpg" width="30" height="30" className="d-inline-block align-top" alt="">
                    
                    </img>
                    TV Series
                </a>
            </nav>
            
         </div>
      );
   }
}

export default Navbar;