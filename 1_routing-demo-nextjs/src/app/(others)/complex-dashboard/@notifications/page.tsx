import { Card } from "@/components/Card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div>Notifications</div>
      <div>
        <Link href={"/complex-dashboard/archived"} className="text-blue-500 underline">Archived</Link>
      </div>
    </Card>
  );
};

export default Notifications;
