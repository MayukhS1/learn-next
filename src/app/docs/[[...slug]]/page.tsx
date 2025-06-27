import { businessLogic } from "../../_lib/blogController";
export default async function Doc({params}: {
    params: Promise<{ slug: string[] }>;
}) {
    const {slug} = await params;
    console.log("Slug:", slug);
    console.log("Business Logic Output:", businessLogic());
    return (
        <>
            <h1>Documentation Page</h1>
            {slug?.length > 0 ? (
                slug.map((part, index) => (
                    <p key={index}>
                        {index === 0 ? "Section: " : "Subsection: "}
                        {part}
                    </p>
                ))
            ) : (
                <p>Welcome to the documentation!</p>
            )}
        </>
    );
}