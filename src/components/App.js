import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from "marked";
import Editor from "./Editor";


marked.use({
    breaks: true
});

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            markdown:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n   if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n     - Some are bulleted.\n          - With different indentation levels.\n              - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1.And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
            
            
        };
    }
    updateMarkdown(markdown){
        this.setState({markdown});
    }
    render(){
        var inputStyle ={
            width: "400px",
            height: "50vh",
            marginLeft: "auto",
            marginRight: "auto",
            padding:"10px"
        }

        var outputStyle ={
            // width: "400px",
            minHeight: "50vh",
            height: "auto",
            backgroundColor: "#DCDCDC",
            marginLeft: "auto",
            marginRight: "auto",
            padding:"10px",
            overflow: "scroll"
        }
        return(
            <div className="App">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col text-center">
                            <h1>
                                <Badge className="text-align-center" text="dark" bg="light">
                                Markdown Previewer
                                </Badge>
                            </h1>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 text-center">
                            <h2 className="text-center"><Badge bg="secondary">Mardown Input</Badge></h2>
                            <textarea className="input" id="editor" style={inputStyle} value={this.state.markdown} onChange={(e)=>this.updateMarkdown(e.target.value)}>
                            </textarea>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center"><Badge bg="secondary">Preview</Badge></h2>
                            <div id="preview" style={outputStyle} dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
                        </div>
                    </div>;
                </div>
            </div>
        )
    }
}