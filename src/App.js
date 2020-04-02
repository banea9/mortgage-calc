import React, { Component } from "react";
import Header from "./components/Header/Header";
import LoanAmount from "./components/LoanAmount/LoanAmount";
import IntrestRate from "./components/InterestRate/IntrestRate";
import NumberOfPayments from "./components/NumberOfPayments/NumberOfPayments";
import BtnCalculate from "./components/BtnCalculate/BtnCalculate";
import MortgageOutput from "./components/MortgageOutput/MortgageOutput";
import Error from './components/Error/Error'
import "./App.css";
import "tachyons";
function calcPayement(principal, years, rate) {
  let monthlyRate = rate / 100 / 12;
  let monthlyPayment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
  let balance = principal;
  for (let y = 0; y < years; y++) {
    let interestY = 0;
    let principalY = 0;
    for (let m = 0; m < 12; m++) {
      let interestM = balance * monthlyRate;
      let principalM = monthlyPayment - interestM;
      interestM = interestY + interestM;
      principalY = principalY + principalM;
      balance = balance - principalM;
    }
  }
  return {
    monthlyPayment: monthlyPayment
  };
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      loanAmount: "",
      intrestRate: "",
      loanLength: "",
      mortgage: {},
      allFieldsPopulated: false
    };
  }

  onLoanAmountChange = event => {
    this.setState({ loanAmount: +event.target.value });
  };

  onIntrestRateChange = event => {
    this.setState({ intrestRate: +event.target.value });
  };

  onLoanLengthChange = event => {
    this.setState({ loanLength: +event.target.value });
  };
  onBtnClick = () => {
    if (
      this.state.loanAmount &&
      this.state.intrestRate &&
      this.state.loanLength
    ) {
      this.setState({ allFieldsPopulated: true });

      const monthlyPayment = calcPayement(+this.state.loanAmount,+this.state.loanLength, +this.state.intrestRate);
      this.setState({mortgage: Object.assign({}, monthlyPayment)})
    } 

  };

  render() {
    return (
      <div>
        <Header />
        <LoanAmount onLoanAmountChange={this.onLoanAmountChange} />
        <IntrestRate onIntrestRateChange={this.onIntrestRateChange} />
        <NumberOfPayments onLoanLengthChange={this.onLoanLengthChange} />
        <BtnCalculate onBtnClick={this.onBtnClick} />
        {this.state.allFieldsPopulated === true ?
        (<MortgageOutput mortgage={this.state.mortgage} years={this.state.loanLength} /> ) :
        (<Error />)}
      </div>
    );
  }
}

export default App;
