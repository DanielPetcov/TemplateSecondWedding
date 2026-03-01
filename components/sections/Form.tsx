"use client";

import { useState } from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { FormContact } from "@/schema/formSchema";

import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import z from "zod";
import { toast } from "sonner";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormContact),
    defaultValues: {
      fullName: "",
      willCome: true,
      willBeChildren: false,
      personsNumber: 1,
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormContact>> = (data) => {
    try {
      setLoading(true);
    } catch (error) {
      toast.error("Ceva nu a mers!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nume complet</Label>
          <Input id="fullName" {...register("fullName")} />
          {errors.fullName && (
            <div className="text-xs text-red-500">
              {errors?.fullName.message}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="willCome">Vei veni?</Label>
          <Controller
            name="willCome"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value === true ? "yes" : "no"}
                onValueChange={(v) => field.onChange(v === "yes")}
                id="willCome"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Da</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">Nu</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="willBeChildren">Vei veni cu copii?</Label>
          <Controller
            name="willBeChildren"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value === true ? "yes" : "no"}
                onValueChange={(v) => field.onChange(v === "yes")}
                id="willBeChildren"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="r1" />
                  <Label htmlFor="r1">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="r2" />
                  <Label htmlFor="r2">No</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="personsNumber">Câte persoane vor veni?</Label>
          <Input
            id="personsNumber"
            {...register("personsNumber")}
            type="number"
            min={0}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="comment">Comentariu</Label>
          <Textarea id="comment" {...register("comment")} />
          {errors.comment && (
            <div className="text-xs text-red-500">
              {errors?.comment.message}
            </div>
          )}
        </div>
        <Button
          disabled={loading}
          type="submit"
          size={"lg"}
          className="block mx-auto rounded-full bg-background-3 w-36 lg:w-100"
        >
          Trimite
        </Button>
      </form>
    </div>
  );
}
