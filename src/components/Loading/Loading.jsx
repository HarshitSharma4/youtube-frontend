const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-4 min-h-96">
      <div className="animate-loading-dot-1 w-4 bg-primary rounded-2xl"></div>
      <div className="animate-loading-dot-2 w-4 bg-secondary rounded-2xl"></div>
      <div className="animate-loading-dot-3 w-4 bg-accent rounded-2xl"></div>
      <div className="animate-loading-dot-4 w-4 bg-error rounded-2xl"></div>
    </div>
  );
};

export default Loading;
