export function BlogCommentActions() {
  return (
    <div className="w-full space-y-2 p-2">
      <div>Leave a comment</div>
      <textarea
        disabled={true}
        placeholder="What's on your mind???"
        className="h-[100px] max-h-[100px] min-h-[100px] w-full min-w-full max-w-full appearance-none border border-primary-950 bg-white/25 stroke-none p-1 outline-none"
      ></textarea>
      <button className="border border-primary-950 bg-white/35 px-4 py-2" disabled={true}>
        Post
      </button>
    </div>
  );
}
