import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    shouldDisplayStatistics: false,
  };

  onLeaveFeedback = typeButton => {
    this.setState(prevState => ({
      [typeButton]: prevState[typeButton] + 1,
    }));
    this.state.shouldDisplayStatistics = true;
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() === 0
      ? 0
      : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    const title = 'Please leave feedback';

    return (
      <Layout>
        <GlobalStyle />
        <Section title={title}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
          {this.state.shouldDisplayStatistics ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is not feedback" />
          )}
        </Section>
      </Layout>
    );
  }
}
