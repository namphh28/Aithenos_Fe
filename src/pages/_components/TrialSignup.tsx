import React, { useState } from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    required?: boolean;
}

function InputField({ label, name, type = 'text', value, onChange, error, required }: InputFieldProps) {
    return (
        <div className="text-left space-y-1">
            <label className="block text-[#281C53] font-semibold">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-2 border ${error ? 'border-red-500' : 'border-[#281C53]'} rounded-md`}
                    rows={4}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full p-3 border ${error ? 'border-red-500' : 'border-[#281C53]'} rounded-md`}
                />
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default function TrialSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        source: '',
        interest: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.name) newErrors.name = 'Vui lòng nhập họ và tên.';
        if (!formData.email) newErrors.email = 'Vui lòng nhập email.';
        if (!formData.phone) newErrors.phone = 'Vui lòng nhập số điện thoại.';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert('Đăng ký thành công');
        }
    };

    return (
        <div className="bg-white border border-[#281C53] rounded-lg p-8 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                    label="Họ và tên"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                />

                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                />

                <InputField
                    label="Số điện thoại"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                />

                <InputField
                    label="Bạn biết đến Aithenos từ đâu?"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                />

                <InputField
                    label="Bạn quan tâm đến tính năng nào của Aithenos?"
                    name="interest"
                    type="textarea"
                    value={formData.interest}
                    onChange={handleChange}
                />

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-[#704EE7] text-white px-6 py-2 rounded-full font-semibold"
                    >
                        Gửi Đăng Ký
                    </button>
                </div>
            </form>
        </div>
    );
}
