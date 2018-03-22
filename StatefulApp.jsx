import React from 'react';

class StatefullApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    {
                        "id":1,
                        "name":"Foo",
                        "age":"20",
                    },
                    {
                        "id":2,
                        "name":"Bar",
                        "age":"30",
                    },
                    {
                        "id":3,
                        "name":"Baz",
                        "age":"40",
                    },
                ],
            content: "Content from state",
            header: "Header from props, passed down the component tree."
        }
    }
    render() {
        return (
            <div>
                <Header headerProp={this.state.header}/>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.state.content}</h2>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render(){
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default StatefullApp;