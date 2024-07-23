// components/CallButton.tsx

type CallButtonProps = {
  phoneNumber: string;
};

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="font-bold text-white hover:underline"
    >
      {phoneNumber}
    </a>
  );
};

export default CallButton;
