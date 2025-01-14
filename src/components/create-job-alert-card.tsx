import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

const CreateJobAlertCard = () => {
  return (
    <div>
      <Card className="w-[250px] bg-cardColor border-cardColor rounded-[10px]">
        <CardHeader>
          <CardTitle className="text-white text-md">Create Job Alert</CardTitle>
          <CardDescription className="text-[15px] text-neutralColor font-normal">Increase an opportunity to <br /> get chance for new jobs.  </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-7">
          <input type="email" className="bg-[#21212b] w-[198px] h-[44px] text-neutralColor rounded-[10px] text-xxs p-5 font-semibold" placeholder="Type Your Email" />
          <button className="w-[210px] h-[44px] border-[1px] border-greenButtonColor rounded-[10px] text-greenButtonColor font-bold text-sm hover:bg-greenButtonColor hover:text-neutralWhite transition-colors">Create Job Alert</button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateJobAlertCard