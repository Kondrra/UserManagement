import React from 'react';
import TopNavBar from './NavBar/TopNavBar';
import AdminRouter from './AdminRouter';

class AdminContainer extends React.Component {



  render() {
    return (
<body background="blue">
      <div className="container">
        <TopNavBar />
        <div className="row">
          <div className="col-md-12">
            <AdminRouter />
          </div>
        </div>
      </div>
</body>

    );
  }
}


export default AdminContainer;
