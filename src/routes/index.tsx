import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ranim Abassi — Full-stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ranim Abassi, a full-stack software engineer building modern web and mobile apps with React, Angular, Spring Boot and more.",
      },
      { property: "og:title", content: "Ranim Abassi — Full-stack Developer" },
      {
        property: "og:description",
        content: "Modern, interactive portfolio showcasing web, mobile and DevOps projects.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
      </main>
    </>
  );
}
