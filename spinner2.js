let spinAnimation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\n'];

for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(spinAnimation[i]);
  }, 100 + 200 * i);
}