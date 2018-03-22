import React from 'react';

class FormsApp extends React.Component {
   constructor(props) {
       super(props);

       this.state = {
           data: 'Initial Data'
       };
       this.updateStateEvent = this.updateState.bind(this);
   };

   updateState(e) {
       this.setState({data: e.target.value});
   }
    render() {
      return (
          <div>
              <Content myDataProps = {this.state.data} updateStateProp = {this.updateStateEvent}>
              </Content>
          </div>
      );
   }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <input type = "text" value = {this.props.myDataProp}
                       onChange = {this.props.updateStateProp} />
                <h4>{this.props.myDataProp}</h4>
            </div>
        )
    }
}

export default FormsApp;