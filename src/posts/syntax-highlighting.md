---
title: Syntax highlighting using shiki
description: Just a Mikro-ORM config as example
date: 06-08-2023
categories:
  - programming
  - databases
published: true
---

# { title }

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```ts
import { Options } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import path from "path";

const config: Options<PostgreSqlDriver> = {
	metadataProvider: TsMorphMetadataProvider,
	migrations: {
		path: path.join(__dirname, "./migrations"),
		glob: "!(*.d).{js,ts}",
		disableForeignKeys: false,
		transactional: true
	},
	entities: ["./dist/entities"],
	type: "postgresql",
	dbName: process.env.POSTGRES_DB,
	clientUrl: process.env.POSTGRES_URL,
	debug: process.env.NODE_ENV !== "production",
	allowGlobalContext: true,
	driverOptions: { connection: { ssl: true } }
};

export default config;
```

> ### The quarterly results look great
>
> - Sales were off the chart!
> - Morale is strong!
> - Poised to go public next spring!
>
> > _Everything_ is going according to **the plan**.
