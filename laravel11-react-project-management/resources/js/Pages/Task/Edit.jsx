import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, task, projects, users}) {
    const {data, setData, post, errors, reset} = useForm({
        image: '',
        name: task.name || '',
        status: task.status || '',
        description: task.description || '',
        due_date: task.due_date || '',
        project_id: task.project_id || '',
        assigned_user_id: task.assigned_user_id || '',
        priority: task.priority || '',
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
                                    <InputLabel htmlFor='task_project_id' value='Project' />

                                    <SelectInput value={data.project_id} name="project_id" id="task_project_id" className="mt-1 block w-full" onChange={e => setData("project_id", e.target.value)} >
                                        <option value="" >Select Project</option>
                                        {projects.data.map(project => (
                                            <option value={project.id} key={project.id} >{project.name}</option>
                                        ))}

                                    </SelectInput>

                                    <InputError message={errors.project_id} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    {/*value={data.image} inside textinput image*/}
                                    <InputLabel htmlFor='task_image_path' value='Task Image' />
                                    <TextInput id='task_image_path' name='image' type='file' className='mt-1 block w-full' onChange={e => setData('image', e.target.files[0])} />
                                    <InputError message={errors.image} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_name' value='Task Name' />
                                    <TextInput id='task_name' name='name' value={data.name} type='text' className='mt-1 block w-full' isFocused={true} onChange={e => setData('name', e.target.value)} />
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

                                    <SelectInput value={data.status} name="status" id="task_status" className="mt-1 block w-full" onChange={e => setData("status", e.target.value)} >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>

                                    </SelectInput>

                                    <InputError message={errors.task_status} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_priority' value='Task Priority' />

                                    <SelectInput value={data.priority} name="priority" id="task_priority" className="mt-1 block w-full" onChange={e => setData("priority", e.target.value)} >
                                        <option value="">Select Priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>

                                    </SelectInput>

                                    <InputError message={errors.priority} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='task_assigned_user' value='Assigned User' />

                                    <SelectInput value={data.assigned_user_id} name="assigned_user_id" id="task_assigned_user" className="mt-1 block w-full" onChange={e => setData("assigned_user_id", e.target.value)} >
                                        <option value="">Select User</option>
                                        {users.data.map(user => (
                                            <option value={user.id} key={user.id} >{user.name}</option>
                                        ))}

                                    </SelectInput>

                                    <InputError message={errors.assigned_user_id} className='mt-2' />
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