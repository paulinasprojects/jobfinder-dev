import AddJobForm from "@/components/add-job-form"

const AddJobPage = () => {
  return (
    <div className="mb-5">
      <div className="mt-10 lg:ml-20 md:ml-10 max-sm:ml-6">
        <h1 className="text-white text-3xl font-bold">Add New Jobs</h1>
      </div>
      <div>
      <AddJobForm/>
      </div>
    </div>
  )
}

export default AddJobPage