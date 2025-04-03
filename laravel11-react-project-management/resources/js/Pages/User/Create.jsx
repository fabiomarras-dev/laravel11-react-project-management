import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const {data, setData, post, errors, reset} = useForm({
        image: '',
        name: '',
        status: '',
        description: '',
        due_date: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('user.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Create new User
                    </h2>
                </div>
            }
        >

            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6  lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={onSubmit} action="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

                                <div>
                                    {/*value={data.image} inside textinput image*/}
                                    <InputLabel htmlFor='user_image_path' value='User Image' />
                                    <TextInput id='user_image_path' name='image' type='file' className='mt-1 block w-full' onChange={e => setData('image', e.target.files[0])} />
                                    <InputError message={errors.image} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_name' value='User Name' />
                                    <TextInput id='user_name' name='name' type='text' className='mt-1 block w-full' isFocused={true} onChange={e => setData('name', e.target.value)} />
                                    <InputError message={errors.name} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_description' value='User Description' />
                                    <TextAreaInput id='user_description' name='description' value={data.description} className='mt-1 block w-full' onChange={e => setData('description', e.target.value)} />
                                    <InputError message={errors.description} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_due_date' value='User Deadline' />
                                    <TextInput id='user_due_date' name='due_date' type='date' value={data.due_date} className='mt-1 block w-full' isFocused={true} onChange={e => setData('due_date', e.target.value)} />
                                    <InputError message={errors.due_date} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_status' value='User Status' />

                                    <SelectInput name="status" id="user_status" className="mt-1 block w-full" onChange={e => setData("status", e.target.value)} >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>

                                    </SelectInput>

                                    <InputError message={errors.user_status} className='mt-2' />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link href={route('user.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                                        Cancel
                                    </Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}