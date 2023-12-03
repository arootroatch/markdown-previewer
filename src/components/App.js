import React from "react";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
        const inputStyle ={
            width: "450px",
            height: "75vh",
            marginLeft: "auto",
            marginRight: "auto",
            padding:"10px"
        }

        const outputStyle ={
            width: "450px",
            height: "75vh",
            backgroundColor: "#DCDCDC",
            marginLeft: "auto",
            marginRight: "auto",
            padding:"10px",
            overflow: "scroll"
        }
        return(
            <div className="App">
                <Row className="mt-4">
                    <Col className="text-center">
                        <h1>
                            <Badge className="text-align-center" text="dark" bg="light">
                            Markdown Previewer
                            </Badge>
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6} className="text-center">
                        <h2 className="text-center mb-0"><Badge style={{width: "450px"}} className="rounded-bottom-0" bg="secondary">Markdown Input</Badge></h2>
                        <textarea className="input" id="editor" style={inputStyle} value={this.state.markdown} onChange={(e)=>this.updateMarkdown(e.target.value)}>
                        </textarea>
                    </Col>
                    <Col md={6}>
                        <h2 className="text-center mb-0"><Badge style={{width: "450px"}} className="rounded-bottom-0" bg="secondary">Preview</Badge></h2>
                        <div id="preview" style={outputStyle} dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
                    </Col>
                </Row>;
            </div>
        )
    }
}