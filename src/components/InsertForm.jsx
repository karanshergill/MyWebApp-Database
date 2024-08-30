import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const InsertRecordsForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleFormSubmit = async (data) => {
        await onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <input
                {...register('label_val', { required: true })}
                type="text"
                placeholder="Enter label value"
            />
            
            <select className='text-gray-500' {...register('table_name', { required: true })} defaultValue="">
                <option value="" disabled hidden>
                    Select a table
                </option>
                <option value="megadns">Mega DNS</option>
                <option value="doddns">DOD DNS</option>
                <option value="dotfiles">DOT Files</option>
            </select>
            <button type="submit">Insert</button>
        </form>
    );
};

InsertRecordsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default InsertRecordsForm;
