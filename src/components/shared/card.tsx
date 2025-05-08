"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"            
import { Badge } from "@/components/ui/badge"          
import { Button } from "@/components/ui/button"        
import * as React from "react"
import Image from "next/image"

export interface CardProps {
    title:    string
    subtitle?: string
    tags:     string[]
    href:     string
    imageSrc?: string
    imageAlt?: string
  }
  export default function Card({ title, subtitle, tags, href, imageSrc, imageAlt }: CardProps) {
    return (
      <article className="bg-cont-primary rounded-2xl border border-border-default overflow-hidden">
        <div className="bg-cont-secondary p-3 relative w-full aspect-[440/277.68]">
          <Image
            src={imageSrc ?? "/covers/image.png"}
            alt={imageAlt ?? "Default alt text"}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 flex flex-col justify-between gap-3 md:items-start">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-1">
                  {tags.map(tag => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                    ))}
                </div>
              <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                      <h3 className="text-h5 font-semibold">{title}</h3>
                      {subtitle && (
                          <p className="text-body-s text-text-secondary">{subtitle}</p>
                      )}
                  </div> 
              </div>
            </div>
            <Button asChild variant="primary" size="default">
                <Link href={href} className="items-center gap-2">
                    Read
                    <ArrowRight className="w-6 h-6 -ml-1" />
                </Link>
            </Button>
        </div>
      </article>
    )
  }