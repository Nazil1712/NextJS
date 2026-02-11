import { Card } from "@/components/Card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div>
        <Link href={"/complex-dashboard"} className="text-blue-500 underline">Default</Link>
      </div>
    </Card>
  );
};

export default Notifications;
