import fs from "fs";
const STORAGE_PATH = "./storage.json";

export const load = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(STORAGE_PATH, "utf8", (err, posts) => {
      if (err) reject(err);
      else resolve(JSON.parse(posts));
    });
  });
};

export const save = (item) => {
  return new Promise((resolve, reject) => {
    load().then((posts) => {
      item.id = `${posts.length + 1}`; // Neuem item eine unique ID geben
      posts.push(item);
      fs.writeFile(STORAGE_PATH, JSON.stringify(posts, null, 2), (err) => {
        if (err) reject(err);
        else resolve(posts);
      });
    });
  });
};
