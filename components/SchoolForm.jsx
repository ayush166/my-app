import React from 'react';
import { useForm } from 'react-hook-form';

export default function SchoolForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const response = await fetch('/api/addschools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        const responseData = await response.json();
        if (response.ok) {
            console.log('Data submitted successfully', responseData);
        } else {
            console.error('Submission failed', responseData);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg'>
            {/* School Name Input */}
            <FloatingLabelInput
                type="text"
                name="name"
                placeholder="School Name"
                register={register}
                required="School name is required"
                errors={errors}
            />

            {/* Address Input */}
            <FloatingLabelInput
                type="text"
                name="address"
                placeholder="Address"
                register={register}
                required="Address is required"
                errors={errors}
            />

            {/* City Input */}
            <FloatingLabelInput
                type="text"
                name="city"
                placeholder="City"
                register={register}
                required="City is required"
                errors={errors}
            />

            {/* Pincode Input */}
            <FloatingLabelInput
                type="text"
                name="pincode"
                placeholder="Pincode"
                register={register}
                required="Pincode is required"
                errors={errors}
            />

            {/* School Email Input */}
            <FloatingLabelInput
                type="email"
                name="email"
                placeholder="School Email"
                register={register}
                required="Email is required"
                errors={errors}
            />

            {/* School Phone Number Input */}
            <FloatingLabelInput
                type="tel"
                name="phone"
                placeholder="School Phone Number"
                register={register}
                required="Phone number is required"
                errors={errors}
            />

            {/* Board Type Selection */}
            <FloatingLabelSelect
                name="boardType"
                defaultValue=""
                options={[
                    { value: '', label: 'Select Board Type', disabled: true },
                    { value: 'state', label: 'State Board' },
                    { value: 'cbse', label: 'CBSE' },
                    { value: 'icse', label: 'ICSE' }
                ]}
                register={register}
                required="Board type is required"
                errors={errors}
            />

            {/* Facility Dropdown */}
            <FloatingLabelSelect
                name="facility"
                defaultValue=""
                options={[
                    { value: '', label: 'Type', disabled: true },
                    { value: 'allGirls', label: 'All Girls' },
                    { value: 'allBoys', label: 'All Boys' },
                    { value: 'coEd', label: 'Co-ed' }
                ]}
                register={register}
                required="Facility type is required"
                errors={errors}
            />

            {/* Image Upload */}
            <div className="relative py-2">
                <input
                    type='file'
                    name='image'
                    {...register("image")}
                    className='border-gray-300 rounded p-2 file:border-black file:rounded file:bg-blue-500 file:text-white file:px-4 file:py-2'
                />
            </div>

            {/* Submit Button */}
            <button type='submit' className='bg-blue-500 text-white rounded py-2 hover:bg-blue-700 focus:ring focus:ring-blue-300'>
                Add School
            </button>
        </form>
    );
}

function FloatingLabelInput({ type, name, placeholder, register, required, errors }) {
    return (
        <div className="relative py-2">
            <input
                type={type}
                name={name}
                id={name}
                {...register(name, { required })}
                placeholder=" "
                className="border-gray-300 rounded p-2 focus:border-purple-700 focus:ring focus:ring-purple-300 block w-full"
            />
            <label htmlFor={name} className={`absolute top-0 left-0 transition-all px-2 ${errors[name] ? 'text-xs' : 'text-base'}`}>
                {placeholder}
            </label>
            {errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
        </div>
    );
}

function FloatingLabelSelect({ name, defaultValue, options, register, required, errors }) {
    return (
        <div className="relative border-black focus:border-purple-500 rounded py-2">
            <select
                name={name}
                defaultValue={defaultValue}
                {...register(name, { required })}
                className="w-full p-2 focus:ring focus:ring-purple-400 block w-full"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label htmlFor={name} className={`absolute top-0 left-0 transition-all px-2 ${errors[name] ? 'text-xs' : 'text-base'}`}>
                {options.find(option => option.value === defaultValue)?.label}
            </label>
            {errors[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
        </div>
    );
}
