import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, user}) {
    const {data, setData, post, errors, reset} = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        password_confirmation: '',
        _method: 'PUT',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('user.update', user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit user "{user.name}"
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

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_name' value='User Name' />
                                    <TextInput id='user_name' name='name' value={data.name} type='text' className='mt-1 block w-full' isFocused={true} onChange={e => setData('name', e.target.value)} />
                                    <InputError message={errors.name} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_email' value='User Email' />
                                    <TextInput id='user_email' name='email' value={data.email} type='text' className='mt-1 block w-full' onChange={e => setData('email', e.target.value)} />
                                    <InputError message={errors.email} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_password' value='Password' />
                                    <TextInput id='user_password' name='password' type='password' className='mt-1 block w-full' onChange={e => setData('password', e.target.value)} />
                                    <InputError message={errors.password} className='mt-2' />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor='user_password_confirmation' value='Confirm Password' />
                                    <TextInput id='user_password_confirmation' name='password_confirmation' type='password' className='mt-1 block w-full' onChange={e => setData('password_confirmation', e.target.value)} />
                                    <InputError message={errors.password} className='mt-2' />
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