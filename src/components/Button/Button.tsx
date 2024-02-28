interface ButtonProps {
  primary: boolean;
  label: string;
  onClick?: () => void;
}

const Button = ({ primary, label, onClick }: ButtonProps) => {
  return (
    <button
      className={`text-center rounded-lg py-2 px-4 text-sm inline-block ${
        primary ? 'bg-[#5A8AF2] text-white' : 'bg-[#F8FAFF] text-[#5A8AF2]'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
