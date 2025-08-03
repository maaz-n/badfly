"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createShortURL } from "@/server/urls";
import { toast } from "sonner";


interface ShorteningFormProps {
  refresh: () => Promise<void>
}

export default function ShorteningForm({refresh}: ShorteningFormProps) {
  const [input, setInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createShortURL(input);
      if (response.success) {
        toast.success(response.message);
        setInput("")
        await refresh()
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <form className="space-y-7" onSubmit={handleSubmit}>
        <Input
          className="border-gray-400"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="url"
          required
        />
        <Button className="w-full lg:w-[30%] flex mx-auto" type="submit">
          Shorten Link
        </Button>
      </form>
    </div>
  );
}
