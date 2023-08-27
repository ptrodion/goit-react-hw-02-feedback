import { List, ListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <List>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <li>Total: {total()} </li>
        <li>PositiveFeedback: {positiveFeedbackPercentage()}%</li>
      </List>
    </>
  );
};
