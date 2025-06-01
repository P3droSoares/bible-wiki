import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <div className="flex w-full h-12 px-4 items-center justify-between bg-border">
      <div className="flex w-fit h-fit row items-center gap-2">
        <img className="w-6" src="./logo_v1.svg" alt="Logo biblewiki" />
        <h1 className="font-bold font-serif text-lg text-secondary-foreground">
          BibleWiki
        </h1>
      </div>

      <div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">Início</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-muted/20">
                Conteúdos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border-border">
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/personagens"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          👤 Personagens
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Explore os personagens bíblicos e suas histórias.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/objetos" title="🏺 Objetos">
                    Descubra utensílios, artefatos e instrumentos mencionados na
                    Bíblia.
                  </ListItem>
                  <ListItem href="/lugares" title="🌍 Lugares">
                    Conheça cidades, regiões e locais históricos do contexto
                    bíblico.
                  </ListItem>
                  <ListItem href="/eventos" title="📜 Eventos">
                    Acompanhe os eventos importantes que marcaram a narrativa
                    bíblica.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">Sobre</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex w-fit h-fit row items-center gap-2">
        <Input
          className="w-52 h-2/5 mr-2 bg-background"
          placeholder="Pesquisar..."
        />
        <Avatar>
          <AvatarImage src="#" />
          <AvatarFallback>BW</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
