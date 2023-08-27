import { ButtonsWrapper, Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      <Buttons onClick={() => onLeaveFeedback('good')}>Good</Buttons>
      <Buttons onClick={() => onLeaveFeedback('neutral')}>Neutral</Buttons>
      <Buttons onClick={() => onLeaveFeedback('bad')}>Bad</Buttons>
    </ButtonsWrapper>
  );
};
