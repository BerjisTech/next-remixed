import { getAllPopups, createPopup, updatePopup, deletePopup } from "@/server/data/popups";

// Handle GET requests
export async function GET(req: Request) {
  try {
    const result = await getAllPopups();
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching pop-ups", error }), {
      status: 500,
    });
  }
}

// Handle POST requests
export async function POST(req: Request) {
  const body = await req.json();
  const { title, message, video_url, image_url } = body;

  if (!title || !message) {
    return new Response(JSON.stringify({ message: "Title and message are required" }), {
      status: 400,
    });
  }

  try {
    const result = await createPopup({ title, message, video_url, image_url });
    return new Response(JSON.stringify({ message: "Pop-up created successfully", result }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error creating pop-up", error }), {
      status: 500,
    });
  }
}

// Handle PUT requests
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { promotion_id, title, message, video_url, image_url } = body;

    if (!promotion_id || !title || !message) {
      return new Response(JSON.stringify({ message: "ID, title, and message are required" }), {
        status: 400,
      });
    }

    const result = await updatePopup({ promotion_id, title, message, video_url, image_url });
    console.log("Update result:", result);

    return new Response(JSON.stringify({ message: "Pop-up updated successfully", result }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in PUT request:", error);
    return new Response(JSON.stringify({ message: "Error updating pop-up", error }), {
      status: 500,
    });
  }
}

// Handle DELETE requests
export async function DELETE(req: Request) {
  const body = await req.json();
  const { promotion_id } = body;

  if (!promotion_id) {
    return new Response(JSON.stringify({ message: "ID is required" }), { status: 400 });
  }

  try {
    const result = await deletePopup(promotion_id);
    return new Response(JSON.stringify({ message: "Pop-up deleted successfully", result }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting pop-up", error }), {
      status: 500,
    });
  }
}
