import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Create from "./Create";

const SideBar = () => {
  return (
    <div>
      <Tabs defaultValue="account">
        <div className="flex space-x-4">
          <TabsList className="w-[360px]">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="winners">Winners</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="create">
            <Create />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SideBar;
