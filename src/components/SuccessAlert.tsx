interface SuccessAlertProps {
  msg: string;
}
const SuccessAlert = ({ msg }: SuccessAlertProps) => {
  return (
    <div
      className="mt-4 mb-5 mx-auto w-6/12 rounded-lg bg-green-light px-6 py-5 text-green-darker"
      role="alert"
    >
      {msg}
    </div>
  );
};

export default SuccessAlert;
