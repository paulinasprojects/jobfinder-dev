import AddJobForm from "@/components/add-job-form"

const AddJobPage = () => {
  return (
    <div>
      <div className="mt-10 ml-20">
        <h1 className="text-white text-3xl font-bold">Add New Jobs</h1>
      </div>
      <div>
      <AddJobForm/>
      </div>
    </div>
  )
}

export default AddJobPage