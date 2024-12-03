// app/api/history/route.ts

import { NextResponse } from 'next/server';
import { db } from '@/utils/db'; // Adjust the import according to your project structure
import { AIOutput } from '@/utils/schema'; // Adjust the import according to your project structure
import { currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = user.id;
    const results = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, userId))
      .orderBy(desc(AIOutput.createdAt));

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
