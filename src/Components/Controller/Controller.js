import React , {Component} from 'react';
import {InputGroup, InputGroupAddon, Input, Button , ButtonGroup} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Controller.css';


class Controller extends Component{
    
    constructor(props){
        super(props);
        
    }

    handleClickMountain = () => {
        this.props.display("Mountains");
        
    }

    handleClickBirds = () => {
        this.props.display("Birds");
    }

    handleClickBeaches = () => {
        this.props.display("Beaches");
    }

    handleClickFood = () => {
        this.props.display("Foods");
    }

    searchOnChange = (e) => {
        this.setState({
            searchVal : e.target.value
        });
    }

    handleClickSearch = () => {
        if(this.state.searchVal.includes("moun") || this.state.searchVal.includes("M") || this.state.searchVal.includes("Moun"))
            this.handleClickMountain();
        else if(this.state.searchVal.includes("bi") || this.state.searchVal.includes("Bi") || this.state.searchVal.includes("B"))
            this.handleClickBirds();
        else if(this.state.searchVal.includes("be"))
            this.handleClickBeaches();
        else if(this.state.searchVal.includes("fo") || this.state.searchVal.includes("F") || this.state.searchVal.includes("FO"))
            this.handleClickFood();
        else{
            this.props.display("NOT FOUND");
        }
            
    }
    render(){
        return(
            <div>
                <div className="d-flex flex-column" Style="margin-top:20px ">
                    <InputGroup className="d-flex justify-content-center">
                        <InputGroupAddon addonType="prepend">                
                                <Input  placeholder="Search ...." onChange={this.searchOnChange} />
                            <Button onClick={this.handleClickSearch}><FontAwesomeIcon icon={faSearch} /></Button></InputGroupAddon>
                    </InputGroup>
                </div>
                <div className="flex-row col-6 offset-3" Style="margin-top:40px">
                    <ButtonGroup className="d-flex justify-content-center">
                        <Button Style="margin:10px;background-color:black" onClick={this.handleClickMountain}>Mountains</Button>
                        <Button Style="margin:10px;background-color:black" onClick={this.handleClickBirds}>Birds</Button>
                        <Button Style="margin:10px;background-color:black" onClick={this.handleClickBeaches}>Beaches</Button>
                        <Button Style="margin:10px;background-color:black" onClick={this.handleClickFood}>Foods</Button>
                    </ButtonGroup>
                </div>
                <div className="headerText">{this.props.section}</div>
            </div>
        )
    }
}


export default Controller;