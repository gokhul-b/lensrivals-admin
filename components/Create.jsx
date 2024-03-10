"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { createCompetition } from "@/app/action";
const Create = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    prize1: "",
    prize2: "",
    prize3: "",
    startDate: "",
    endDate: "",
    participants: [],
  });

  const handleChange = (e) => {
    setForm((prev) => {
      const updatedForm = { ...prev, [e.target.name]: e.target.value };
      console.log(form);
      return updatedForm;
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await createCompetition(form).then(() => {
        setForm({
          title: "",
          description: "",
          prize1: "",
          prize2: "",
          prize3: "",
          startDate: "",
          endDate: "",
          participants: [],
        });
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
    // console.log(form);
  };
  return (
    <div>
      <div className="my-6">
        <p className="font-bold text-2xl">New Competition</p>
      </div>
      <div>
        <form action={handleSubmit} className="space-y-6">
          <div>
            <Input
              type="text"
              name="title"
              placeholder="Add a title"
              onChange={handleChange}
            />
          </div>
          <div>
            <Textarea
              name="description"
              placeholder="Add a description"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-6">
            <p className="font-bold">Prizes</p>
            <div className="flex space-x-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="firstprize">First Prize</Label>
                <Input
                  type="firstprize"
                  name="prize1"
                  id="firstprize"
                  placeholder="Enter the amount"
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="secondprize">Second Prize</Label>
                <Input
                  type="secondprize"
                  name="prize2"
                  id="secondprize"
                  placeholder="Enter the amount"
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="thirdprize">Third Prize</Label>
                <Input
                  type="thirdprize"
                  id="thirdprize"
                  name="prize3"
                  placeholder="Enter the amount"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-bold">Deadline</p>
            <div className="flex space-x-6 items-center">
              <div className="grid max-w-sm items-center gap-1.5">
                <Label htmlFor="startDate">Start date</Label>
                <Input
                  onChange={handleChange}
                  type="date"
                  name="startDate"
                  id="startDate"
                />
              </div>
              <p className="font-bold mt-4">-</p>
              <div className="grid max-w-sm items-center gap-1.5">
                <Label htmlFor="endDate">End date</Label>
                <Input
                  onChange={handleChange}
                  type="date"
                  name="endDate"
                  id="endDate"
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Create;
