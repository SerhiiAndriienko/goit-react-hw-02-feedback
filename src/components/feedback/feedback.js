// import React from 'react';
// import css from './feedback.module.css';
// import Statistics from './statistics/statistics';
// import Options from './options/options';
// import Section from './Section/section';

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   goode = () => {
//     this.setState(prevState => ({
//       good: (prevState.good += 1),
//     }));
//   };
//   neutraly = () => {
//     this.setState(prevState => ({
//       neutral: (prevState.neutral += 1),
//     }));
//   };
//   bady = () => {
//     this.setState(prevState => ({
//       bad: (prevState.bad += 1),
//     }));
//   };
//   countTotalFeedback = () => {
//     return this.state.bad + this.state.good + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return `${(
//       (this.state.good * 100) /
//       (this.state.bad + this.state.good + this.state.neutral)
//     ).toFixed(0)}%`;
//   };

//   render() {
//     return (
//       <div>
//         <Section Title="Please leave feedback">
//           <Options
//             clickOnButtonG={this.goode}
//             clickOnButtonN={this.neutraly}
//             clickOnButtonB={this.bady}
//           ></Options>
//           <h2>Statistics</h2>

//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           ></Statistics>
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;
