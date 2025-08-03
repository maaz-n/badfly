"use client";
import React, { useEffect, useState } from "react";
import ShorteningForm from "./shortening-form";
import URLList from "./url-list";
import { getUrls } from "@/server/urls";
import Pagination from "./pagination";
import URLListSkeleton from "./url-list-skeleton";
import { useUser } from "@clerk/nextjs";

type URL = {
  _id: string;
  shortCode: string;
  originalUrl: string;
  visits: number;
};

export default function URLShorteningContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [urls, setUrls] = useState<URL[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const linksPerPage = 5;
  const data = useUser()

  async function fetchUrls() {
    try {
      const user = data.user
      if(!user) return
      const userId = user.id
      setIsLoading(true);
      const response = await getUrls(userId);
      if (response) {
        setUrls(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUrls();
  }, []);

  const lastLinkIndex = currentPage * linksPerPage;
  const firstLinkIndex = lastLinkIndex - linksPerPage;

  const currentLinks = urls.slice(firstLinkIndex, lastLinkIndex);

  return (
    <div className="w-[70%] lg:w-[35%] mx-auto">
      <ShorteningForm refresh={fetchUrls} />
      {isLoading ? (
        <URLListSkeleton/>
        
      ) : (
        <div>
          <URLList urls={currentLinks} refresh={fetchUrls} />
          <Pagination
            totalLinks={urls.length}
            linksPerPage={linksPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}
