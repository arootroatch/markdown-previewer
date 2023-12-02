import React from "react";
import Badge from "react-bootstrap/Badge";
import Editor from "./Editor";

export default class App extends React.Component{
    render(){
        var inputStyle ={
            width: "400px",
            height: "50vh",
            marginLeft: "auto",
            marginRight: "auto",
            padding:"10px"
        }
        return(
            <div className="App">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col text-center">
                            <h1>
                                <Badge className="text-align-center" variant="light">
                                Markdown Previewer
                                </Badge>
                            </h1>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 text-center">
                            <h2 className="text-center"><Badge variant="secondary">Mardown Input</Badge></h2>
                            <textarea className="input" style={inputStyle} >
                            </textarea>
                        </div>

                        <div className="col-md-6">
                            <h2 className="text-center"><Badge variant="secondary">Preview</Badge></h2>
                        </div>
                    </div>;
                </div>
            </div>
        )
    }
}