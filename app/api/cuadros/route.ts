import { fetchCuadros, fetchCuadrosByYear } from "@/app/lib/data";
import { Cuadro } from "@/app/lib/data";

export async function GET(request: Request) {
    // get the query param n
    const url = new URL(request.url);
    const n = url.searchParams.get("n") || undefined; // amount of cuadros to fetch
    const p = url.searchParams.get("p") || undefined; // padding 
    const year = url.searchParams.get("year") || undefined; // year to filter
    
    if(year){

        const cuadros = (await fetchCuadrosByYear(parseInt(year), n ? parseInt(n) : undefined, p ? parseInt(p) : undefined)).rows;
        return new Response(JSON.stringify(cuadros), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    const cuadros = (await fetchCuadros(n ? parseInt(n) : undefined, p ? parseInt(p) : undefined)).rows;
    return new Response(JSON.stringify(cuadros), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        }
    });

}