import React , {Component} from 'react';
import Controller from './Components/Controller/Controller'
import ShowGallery from './Components/ShowGallery/ShowGalley'

class App extends Component {
  state = {images:[{src : '1.jpg' , type: 'mountain'},
  {src : '2.jpg' , type: 'Mountains'},
  {src : '3.jpg' , type: 'Mountains'},
  {src : '4.jpg' , type: 'Mountains'},
  {src : '5.jpg' , type: 'Mountains'},
  {src : '6.jpg' , type: 'Mountains'},
  {src : '7.jpg' , type: 'Birds'},
  {src : '8.jpg' , type: 'Birds'},
  {src : '9.jpg' , type: 'Birds'},
  {src : '10.jpg' , type: 'Birds'},
  {src : '11.jpg' , type: 'Birds'},
  {src : '12.jpg' , type: 'Birds'},
  {src : '13.jpg' , type: 'Beaches'},
  {src : '14.jpg' , type: 'Beaches'},
  {src : '15.jpg' , type: 'Beaches'},
  {src : '16.jpg' , type: 'Beaches'},
  {src : '17.jpg' , type: 'Beaches'},
  {src : '18.jpg' , type: 'Beaches'},
  {src : '19.jpg' , type: 'Foods'},
  {src : '20.jpg' , type: 'Foods'},
  {src : '21.jpg' , type: 'Foods'},
  {src : '22.jpg' , type: 'Foods'},
  {src : '23.jpg' , type: 'Foods'},
  {src : '24.jpg' , type: 'Foods'}],
  display:'General Section'}
  
  handleClick = (dis) => {
    this.setState({
      display: dis
    });
  }

  render(){
      return (
        <div className="App">
            <Controller display={this.handleClick} section={this.state.display}/>
            <ShowGallery images={this.state} display={this.state.display} />
        </div>
      );
  }
}

export default App;
