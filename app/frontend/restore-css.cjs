
const fs = require("fs");

for (const name of ["App.css", "index.css"]) {
  const file = `src/${name}`;
  const original = fs.readFileSync(file, "utf8");

  const match = original.match(
    /___CSS_LOADER_EXPORT___\.push\(\[module\.id, `([\s\S]*?)`, "",/
  );

  if (!match) {
    console.error(`Could not extract CSS from ${file}`);
    process.exitCode = 1;
    continue;
  }

  fs.copyFileSync(file, `${file}.webpack-backup`);
  fs.writeFileSync(file, match[1], "utf8");
  console.log(`Restored ${file}`);
}