import React from "react"
import NavBar from "./component/NavBar/Navbar";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";



class App extends React.Component {
  constructor(props){
      super()
      this.state = {show:"work"}
      this.change = this.change.bind(this)
  }

    change(e){
      this.setState({show:e.target.outerText})
      console.log(e.target.outerText)
    }
  render(){
    return(
      <div className="wrapper">
        <NavBar change={this.change} />
        <Content show={this.state.show}/>
        <Footer/>
     </div> 
    )
  }
}

export default App;