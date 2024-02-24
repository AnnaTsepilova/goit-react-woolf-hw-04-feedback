import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedbackOptionsWrapper}>
      {options.map(option => {
        const chooseButtonColor = () => {
          switch (option) {
            case 'good':
              return css.goodButton;
            case 'neutral':
              return css.neutralButton;
            case 'bad':
              return css.badButton;

            default:
              return css.neutralButton;
          }
        };

        return (
          <button
            className={chooseButtonColor()}
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
