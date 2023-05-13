interface FieldErrorProps {
  errorMsg: string;
}

const FieldError = (props: FieldErrorProps) => {
  const { errorMsg } = props;
  return <span className="text-sm text-warning">{errorMsg}</span>;
};

export default FieldError;
