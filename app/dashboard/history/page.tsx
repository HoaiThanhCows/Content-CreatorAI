// pages/history.tsx
import { currentUser } from '@clerk/nextjs/server';
import { AIOutput } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import { db } from '@/utils/db';
import HistoryClient, { HISTORY } from '../_components/HistoryClient';


async function History() {
    const user = await currentUser();
    const userEmailAddress = user?.primaryEmailAddress?.emailAddress as string; // Explicitly cast to string
    {/* @ts-ignore */ }
    const HistoryList: HISTORY[] = await db.select().from(AIOutput)
        .where(eq(AIOutput?.createdBy, userEmailAddress)) // Use the explicitly casted variable
        .orderBy(desc(AIOutput.id));

    return (
        <HistoryClient historyList={HistoryList} />
    );
}

export default History;
