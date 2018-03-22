import React from 'react';

class App extends React.Component {
   render() {
       var i = 1;
    var myStyle = {
        fontSize: 100,
        color: '#FF0000'
     }
      return (
         <div>
             {/* Nested elements */}
            <h1 style = {myStyle}>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!</p>
            {/* Inline JS */}
            <h1>{1+1}</h1>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
            <Header/>
            <Content/>
         </div>
      );
   }
}

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>class Header</h1>
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>class Content</h2>
                <p>The content text!!</p>    
            </div>
        );
    }
}

export default App;