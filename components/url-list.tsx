"use client"

import { CheckIcon, CopyIcon, ExternalLink, EyeIcon, X } from "lucide-react";
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
    if (response.success) {
      toast.success(response.message)
      refresh()
    } else {
      toast.error(response.message)
    }

  }

  if (urls.length === 0) {
    return <div className="min-h-[420px] flex items-center justify-center font-bold text-2xl text-white">No URLs found...</div>;
  } else {
    return (
      <div className="min-h-[455px]">
        <h2 className="text-center text-white my-5 text-2xl font-bold">Recent URLs</h2>
        <ul>
          {urls.map((url) => (
            <li
              className="group w-full relative bg-neutral-900 rounded-lg my-5 px-3 py-5 hover:translate-y-[-2px] duration-200"
              key={url._id}
            >
              <div className="wrapper flex flex-col gap-y-3">

                <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
                  <div className="url text-white font-bold">
                    <Link href={`/${url.shortCode}`} target="_blank">
                      <div className="flex items-center text-sm sm:text-base gap-2">
                        {formatUrl(url.shortCode)}
                        <ExternalLink className="w-4 h-4" />

                      </div>
                    </Link>
                  </div>
                  <div className="options flex items-center gap-5">
                    <button onClick={() => handleCopyLink(url.shortCode)}>
                      {copiedUrl == url.shortCode ? <CheckIcon className="w-4 h-4 text-white" /> :
                        <CopyIcon className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />}
                    </button>

                    <div className="flex items-center gap-3">
                      <EyeIcon className="w-4 h-4 text-white" />
                      <span className="text-white">{url.visits} clicks</span>
                    </div>
                  </div>
                  <button className="absolute right-1 top-1 text-muted-foreground opacity-0 group-hover:opacity-100 duration-200 cursor-pointer" onClick={() => handleDelete(url._id)}>
                    <X className="w-3 h-3" />
                  </button>

                </div>
                <div className="points-to ml-5 text-sm">
                  <span className="text-neutral-600">→ {url.originalUrl.split("/")[2]}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
