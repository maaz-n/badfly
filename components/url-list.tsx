"use client"

import { CheckIcon, CopyIcon, EyeIcon, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { deleteUrl } from "@/server/urls";
import { toast } from "sonner";

interface URLListProps {
  urls: {
    _id: string;
    shortCode: string;
    originalUrl: string;
    visits: number;
  }[];
  refresh: () => Promise<void>
}

export default function URLList({ urls, refresh }: URLListProps,) {
  const formatUrl = (code: string) => {
    return `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;
  };

  const [copiedUrl, setCopiedUrl] = useState("")

  const handleCopyLink = (code: string): void => {
    navigator.clipboard.writeText(formatUrl(code))
    setCopiedUrl(code)
    setTimeout(() => {
      setCopiedUrl("")
    }, 3000)
  }

  const handleDelete = async (id: string) => {
    const response = await deleteUrl(id)
    if(response.success){
      toast.success(response.message)
      refresh()
    }else{
      toast.error(response.message)
    }

  }

  if (urls.length === 0) {
    return <div className="min-h-[420px] flex items-center justify-center font-bold text-2xl">No URLs found...</div>;
  } else {
    return (
      <div className="min-h-[420px]">
        <ul>
          {urls.map((url) => (
            <li
              className="group w-full border relative border-gray-300 rounded-lg my-5 px-3 py-5 hover:translate-y-[-2px] duration-200"
              key={url._id}
            >
              <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
                <div className="url text-blue-500">
                  <Link href={`/${url.shortCode}`} target="_blank">{formatUrl(url.shortCode)}</Link>
                </div>
                <div className="options flex items-center gap-5">
                  <button onClick={() => handleCopyLink(url.shortCode)}>
                     {copiedUrl == url.shortCode ? <CheckIcon className="w-4 h-4"/> : 
                      <CopyIcon className="w-4 h-4 text-muted-foreground hover:bg-muted" /> }
                  </button>
                  
                  <div className="flex items-center gap-3">
                    <EyeIcon className="w-4 h-4" />
                    <span>{url.visits} clicks</span>
                  </div>
                </div>
              </div>
              <button className="absolute right-1 top-1 text-muted-foreground opacity-0 group-hover:opacity-100 duration-200 cursor-pointer" onClick={() => handleDelete(url._id)}>
                <X className="w-3 h-3"/>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
