import React, { Component } from 'react';
import Statistics from './feedback/statistics/statistics';
import Options from './feedback/options/options';
import Section from './feedback/Section/section';
import './App.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goode = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };
  neutraly = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };
  bady = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return `${(
      (this.state.good * 100) /
      (this.state.bad + this.state.good + this.state.neutral)
    ).toFixed(0)}%`;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <Options
            clickOnButtonG={this.goode}
            clickOnButtonN={this.neutraly}
            clickOnButtonB={this.bady}
          ></Options>
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
