/* eslint-disable react-hooks/exhaustive-deps */

// 'use client'
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";

import { HISTORY } from "./HistoryClient";

import { UserSubscriptionContext } from "@/app/(context)/UserSubscription";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import Link from "next/link";
import { TotalUsageContext } from "@/app/(context)/TotalUsafeContext";

// eslint-disable-next-line @next/next/no-async-client-component
function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const [maxWords, setMaxWords] = useState(10000);
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);
  const [upgradeMessage, setUpgradeMessage] = useState("");

  useEffect(() => {
    if (user) {
      GetData();
      IsUserSubscribe();
    }
  }, [user]);

  useEffect(() => {
    if (user && updateCreditUsage) {
      GetData();
    }
  }, [updateCreditUsage, user]);

  const GetData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email address not found");
      return;
    }

    try {
      // @ts-ignore
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
      GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const IsUserSubscribe = async () => {
    setUserSubscription(false);
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) {
      console.error("User email not found");
      return;
    }

    try {
      const result = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.email, email));

      if (result.length > 0) {
        setUserSubscription(true);
        setMaxWords(100000);
      } else {
        console.log("User is not subscribed");
      }
    } catch (error) {
      console.error("Error checking subscription:", error);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length);
    });

    setTotalUsage(total);
    console.log(total);
  };

  const checkAndAddResponse = (responseLength: number) => {
    if (totalUsage + responseLength > maxWords) {
      setUpgradeMessage("Vui lòng nâng cấp để xem thêm.");
    } else {
      setUpgradeMessage("");
      setTotalUsage(totalUsage + responseLength);
    }
  };

  const getBarStyle = () => {
    let percentage = (totalUsage / maxWords) * 100;
    if (percentage > 100) {
      percentage = 100;
    }
    return {
      width: `${percentage}%`,
      borderRadius: percentage >= 100 ? "0 9999px 9999px 0" : "9999px",
    };
  };

  return (
    <div className="m-5">
      <div className="bg-green-400 text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#a5e9b6] w-full rounded-full mt-3">
          <div className="h-2 bg-white" style={getBarStyle()}></div>
        </div>
        <h2 className="text-sm my-2">
          {totalUsage}/{maxWords} credit used
        </h2>
        {upgradeMessage && <p className="text-red-500">{upgradeMessage}</p>}
      </div>
      <Link href={"/dashboard/billing"}>
        <Button
          variant={"secondary"}
          className="w-full my-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full"
        >
          Nâng cấp
        </Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
