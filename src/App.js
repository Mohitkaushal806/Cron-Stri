
import React, { Component } from 'react';
import './App.css';
import cronstrue from 'cronstrue';
import ConvertedString from './components/String/String';
import Header from './components/Header/Header';
import Input from './Input/Input';
import Limits from './components/Inputlimits/Inputlimits';
import Footer from './components/Footer/Footer';
import Range from './components/Range/Range';
import { isValidCron } from 'cron-validator';
import parse from 'cron-parser';
import Nextjob from './components/NextString/NextString';
import Morejob from './components/MoreJob/MoreJob';

class App extends Component {
  state = {
    stri : 'ENTER CRON EXPRESSION BELOW',
    next1 : '',
    next2 : '',
    next3 : '',
    next4 : '',
    next5 : '',
    nextbtn : false,
    nextmore : false
  }
  clearStr = (input) => {
    if(input.length === 0){
      document.querySelector('.input').style.border = "1px solid white";
      document.querySelector('.min').style.color = "white";
      document.querySelector('.outstring').style.color="white";
      this.setState({stri : 'ENTER CRON EXPRESSION BELOW' , nextbtn : false ,nextmore : false});
    }else{
      document.querySelector('.input').style.border = "1px solid red";
      this.setState({stri : ' ---', nextbtn : false ,nextmore : false});
    }
  }

  nextfinder = (exp) => {
    const interval = parse.parseExpression(exp);
    let next = interval.next().toString();
    this.setState({next1 : next});
    next = interval.next().toString();
    this.setState({next2 : next});
    next = interval.next().toString();
    this.setState({next3 : next});
    next = interval.next().toString();
    this.setState({next4 : next});
    next = interval.next().toString();
    this.setState({next5 : next , nextbtn: true});
  }

  next4jobs = () => {
    const status = this.state.nextmore;
    this.setState({nextmore: status ? false : true})
  }

  getInputstr = (event) =>{
    let str = event.target.value.split(' ');

    str = str.filter(el =>{
                              if(el !=='') {return el;}
                              return null;
                          });
    if(str.length === 5){
      str=str.join(' ');
      let valid = isValidCron(str);
      
      if(valid){
        this.nextfinder(str);
        str = cronstrue.toString(str);
        document.querySelector('.outstring').style.color="white";
        document.querySelector('.input').style.border = "none";
        this.setState({stri: str});
        document.querySelector('.dayweek').style.color="yellow";
        document.querySelector('.month').style.color="white";
        document.querySelector('.daymonth').style.color="white";
        document.querySelector('.hour').style.color="white";      
        document.querySelector('.min').style.color="white";
      }else{
        this.setState({stri : " Invalid exprssion ! "})
        document.querySelector('.outstring').style.color="red";
        this.setState({nextbtn: false , nextmore : false})
      }
    }else if(str.length ===4){
      document.querySelector('.dayweek').style.color="white";
      document.querySelector('.month').style.color="yellow";
      document.querySelector('.daymonth').style.color="white";
      document.querySelector('.hour').style.color="white";      
      document.querySelector('.min').style.color="white";
      this.clearStr(str);
    }else if(str.length ===3){
      document.querySelector('.dayweek').style.color="white";
      document.querySelector('.month').style.color="white";
      document.querySelector('.daymonth').style.color="yellow";
      document.querySelector('.hour').style.color="white";      
      document.querySelector('.min').style.color="white";
      this.clearStr(str);
    }else if(str.length ===2){
      document.querySelector('.dayweek').style.color="white";
      document.querySelector('.month').style.color="white";
      document.querySelector('.daymonth').style.color="white";
      document.querySelector('.hour').style.color="yellow";      
      document.querySelector('.min').style.color="white";
      this.clearStr(str);
    }else if(str.length ===1){  
      document.querySelector('.dayweek').style.color="white";
      document.querySelector('.month').style.color="white";
      document.querySelector('.daymonth').style.color="white";
      document.querySelector('.hour').style.color="white"; 
      document.querySelector('.min').style.color="yellow";
      this.clearStr(str);
    }else{
      this.clearStr(str);
    }
  }

  
  render(){
    let nextbutton= null;
    if(this.state.nextbtn){
    nextbutton = <Nextjob clicked={this.next4jobs} nextjob={this.state.next1}/>
    }
    let morejob = null;
    if(this.state.nextmore){
      morejob = <Morejob job1={this.state.next2} job2={this.state.next3} job3={this.state.next4} job4={this.state.next5}/>
    }
    return (
      <div className="App">
        <center>
          <Header />
          <ConvertedString string={this.state.stri} />
          {nextbutton}
          {morejob}
          <Input getstr={this.getInputstr} />
          <Range />
          <Limits />
          <Footer />
        </center>

      </div>
    );
  }
}

export default App;
