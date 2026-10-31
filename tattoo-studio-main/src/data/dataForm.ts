export interface FormField {
  id: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Họ và tên',
    type: 'text',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    label: 'Địa chỉ Email',
    type: 'email',
    required: true,
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Số điện thoại',
    type: 'tel',
    required: true,
  },
  {
    id: 'message',
    name: 'message',
    label: 'Nội dung ý tưởng / Yêu cầu đặt lịch',
    type: 'textarea',
    required: true,
  },
];