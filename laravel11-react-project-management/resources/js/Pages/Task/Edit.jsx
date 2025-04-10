import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, task}) {
    const {data, setData, post, errors, reset} = useForm({
        image: '',
        name: task.name || '',
        status: task.status || '',
        description: task.description || '',
        due_date: task.due_date || '',
        _method: 'PUT',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('task.update', task.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit task "{task.name}"
                    </h2>
                </div>
            }
        >

            <Head title="Tasks" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6  lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={onSubmit} action="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">

                                {task.image_path && 
                                <div className="mb-4">
                                    <img src={task.image_path} className="w-64" />
                                </div>
                                }

                                <div>
                                    {/*value={data.image} inside textinput image*/}
                                    <InputLabel htmlFor='task_image_path' value='Task Image' />
                                    <TextInput id='task_image_path' name='image' type='file' className='mt-1 block w-full' onChange={e => setData('image', e.target.files[0])} />
                                    <InputError message={errors.image} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_name' value='Task Name' />
                                    <TextInput id='task_name' name='name' type='text' value={data.name} className='mt-1 block w-full' isFocused={true} onChange={e => setData('name', e.target.value)} />
                                    <InputError message={errors.name} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_description' value='Task Description' />
                                    <TextAreaInput id='task_description' name='description' value={data.description} className='mt-1 block w-full' onChange={e => setData('description', e.target.value)} />
                                    <InputError message={errors.description} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_due_date' value='Task Deadline' />
                                    <TextInput id='task_due_date' name='due_date' type='date' value={data.due_date} className='mt-1 block w-full' isFocused={true} onChange={e => setData('due_date', e.target.value)} />
                                    <InputError message={errors.due_date} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_status' value='Task Status' />

                                    <SelectInput name="status" id="task_status" className="mt-1 block w-full" onChange={e => setData("status", e.target.value)} >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>

                                    </SelectInput>

                                    <InputError message={errors.task_status} className='mt-2' />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link href={route('task.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
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