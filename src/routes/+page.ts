import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (({ params }) => {
	throw redirect(302, "/collection");
}) satisfies PageLoad;
