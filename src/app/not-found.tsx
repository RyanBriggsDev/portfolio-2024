import Button from "./components/Button";

function Custom404() {
  return (
    <div className="min-h-[calc(100vh-var(--footer-height))] flex justify-center items-center">
      <div className="flex flex-col text-center gap-6">
        <h1>You're lost</h1>
        <h2>That's not good</h2>
        <Button className="btn-primary" type="link" href="/">
          Go home
        </Button>
      </div>
    </div>
  );
}

export default Custom404;
