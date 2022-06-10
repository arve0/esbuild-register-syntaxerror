import cliTable from "cli-table3";
import commander from "commander";
import debug from "debug";
import nodeFetch from "node-fetch";
import read from "read";
import simpleGit from "simple-git";
import yaml from "yaml";
import zod from "zod";
import pkg from "./package.json";

console.log(`version: ${pkg.version}`)

const modules = {
  cliTable: cliTable,
  commander: commander,
  debug: debug,
  nodeFetch: nodeFetch,
  read: read,
  simpleGit: simpleGit,
  yaml: yaml,
  zod: zod,
}

for (const [name, module] of Object.entries(modules)) {
  if (module) {
    console.log("✅", name)
  } else {
    console.log("❌", name)
  }
}