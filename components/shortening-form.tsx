"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { createShortURL } from "@/server/urls";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


interface ShorteningFormProps {
  refresh: () => Promise<void>
}

export default function ShorteningForm({refresh}: ShorteningFormProps) {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="w-full">
      <form className="space-y-7" onSubmit={handleSubmit}>
        <Input
          className="bg-neutral-900 border-none text-white h-15"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="url"
          required
          placeholder="Paste link here..."
        />
        <button className="w-full bg-gray-300 text-black px-4 py-2 lg:w-[30%] flex justify-center rounded-md font-bold hover:bg-gray-100 duration-200 mx-auto cursor-pointer" type="submit">
          {isLoading ? <div className="flex gap-3 items-center">
            <Loader2 className="w-4 h-4 animate-spin"/>
            <p>Shortening</p>
          </div>: "Shorten link" }
        </button>
      </form>
    </div>
  );
}
