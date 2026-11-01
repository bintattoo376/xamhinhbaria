interface ContactFormProps {
  idPrefix?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ idPrefix = 'contact' }) => {
  return (
    <form className="space-y-4">
      {/* Các trường input/form của bạn sử dụng idPrefix làm tiền tố (nếu có) */}
    </form>
  );
};

export default ContactForm;