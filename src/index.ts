import * as core from "@actions/core";
import * as fs from "node:fs";

void main();

interface Token {
  bearer_token: string;
}

async function main() {
  const team = core.getInput("team") || "main";

  core.info(`Setting up caching for '${team}'..."`);

  if (!fs.existsSync("/var/run/nsc/token.json")) {
    throw new Error(
      "Instance credentials missing. Are we running on Namespace?"
    );
  }

  const contents = fs.readFileSync("/var/run/nsc/token.json", "utf8");
  const token = JSON.parse(contents) as Token;

  core.exportVariable("TURBO_API", "https://turbo.cache.ord.namespaceapis.com");
  core.exportVariable("TURBO_TEAM", team);
  core.setSecret(token.bearer_token);
  core.exportVariable("TURBO_TOKEN ", token.bearer_token);

  core.info(
    "Good to go, TURBO_API, TURBO_TEAM and TURBO_TOKEN are set, let's turbo."
  );
}
