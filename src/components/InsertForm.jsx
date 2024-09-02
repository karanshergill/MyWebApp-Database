import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const InsertRecordsForm = ({ onSubmit }) => {
    const { register, handleSubmit, reset, setValue, watch } = useForm();

    const handleFormSubmit = async (data) => {
        await onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col font-body w-max gap-2'>
            <Input
                {...register('label_val', { required: true })}
                type="text"
                placeholder="Enter value"
            />

            <Select className='text-gray-500' {...register('table_name', { required: true })} defaultValue="">
                <SelectTrigger>
                    <SelectValue placeholder="Select a table" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>DNS</SelectLabel>
                        <SelectItem value="megadns">Mega DNS</SelectItem>
                        <SelectItem value="doddns">DOD DNS</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel>Directories</SelectLabel>
                        <SelectItem value="directories">Common Directories</SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                        <SelectLabel>Files</SelectLabel>
                        <SelectItem value="dotfiles">Dot Files</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button type="submit">Insert</Button>
        </form>
    );
};

InsertRecordsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default InsertRecordsForm;
