export default async function Blog({params}:{
    params: Promise<{ slug: string }>;
}) {
    const blogId = (await params).slug;
    return (
        <>
            <h1>Blog Page {blogId}</h1>
            <p>This is the blog page content.</p>
        </>
    );
}