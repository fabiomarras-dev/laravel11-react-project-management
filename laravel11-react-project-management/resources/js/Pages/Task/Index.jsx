import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksTable from "./TasksTable";


export default function index({/*auth,*/ tasks, queryParams = null}) {
    
    return (
        <AuthenticatedLayout
            //video: 2:04:10
            //user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Tasks
                </h2>
            }
        >

            <Head title="Tasks" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6  lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <TasksTable tasks={tasks} queryParams={queryParams} />
                            
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}