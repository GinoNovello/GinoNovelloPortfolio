"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, Github } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ProjectCardProps {
  href: string;
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image: string;
  video: string;
  links: readonly {
    type: string;
    href: string;
    icon: string | ReactNode;
  }[];
}

export function ProjectCard({
  href,
  title,
  description,
  dates,
  tags,
  image,
  video,
  links,
}: ProjectCardProps) {
  const renderIcon = (icon: string | ReactNode) => {
    if (typeof icon === "string") {
      switch (icon) {
        case "globe":
          return <Globe className="h-4 w-4" />;
        case "github":
          return <Github className="h-4 w-4" />;
        default:
          return null;
      }
    }
    return icon;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        {video ? (
          <video
            className="w-full h-48 object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : image ? (
          <img // eslint-disable-line
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        ) : null}
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex gap-2">
            {links.map(
              (link, index) =>
                link.href && (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={link.type}
                  >
                    {renderIcon(link.icon)}
                    <span className="sr-only">{link.type}</span>
                  </Link>
                )
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{dates}</p>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}