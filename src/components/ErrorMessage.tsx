interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div style={{ color: "red" }}>Error: {message}</div>;
};
