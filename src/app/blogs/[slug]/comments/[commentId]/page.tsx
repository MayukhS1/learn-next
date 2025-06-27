export default async function Comment({params}: {
    params: Promise<{ slug: string, commentId: string }>;
}) {
    const {slug, commentId} = await params;
    return (
        <>
            <h1>Blog: {slug}</h1>
            <h3>Comment {commentId}</h3>
            <p>This is the comment page content.</p>
        </>
    );
}