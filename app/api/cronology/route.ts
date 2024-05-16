import { getEvents } from "@/app/lib/data";

export async function GET(request: Request) {
    const events = await getEvents();
    return new Response(JSON.stringify(events), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    });
}