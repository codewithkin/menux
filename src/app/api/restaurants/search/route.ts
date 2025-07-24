import {prisma} from "@/helpers/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Get the search query
    const query = request.nextUrl.searchParams.get("query");

    console.log("Search query:", query);

    if (!query) {
      return NextResponse.json(
        {error: "Search query is required."},
        {status: 400}
      );
    }

    // Find a restaurant based on the search query
    const restaurants = await prisma.user.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
    });

    return NextResponse.json(restaurants);
  } catch (e) {
    console.error("Error in GET request:", e);

    return NextResponse.json(
      {
        error: "An error occurred while processing your request.",
      },
      {
        status: 500,
      }
    );
  }
}
