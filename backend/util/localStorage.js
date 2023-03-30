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

export const deletePost = (paramId) => {
  return new Promise((resolve, reject) => {
    load().then((posts) => {
      let postIndex = posts.findIndex((post) => post.id === paramId);
      //Delete Img
      let postLink = posts[postIndex].link;
      fs.rm("./" + postLink, (err) => {
        if (err) reject(err);
        else {
          //Delete Object
          posts.splice(postIndex, 1);
          fs.writeFile(STORAGE_PATH, JSON.stringify(posts, null, 2), (err) => {
            if (err) reject(err);
            else resolve(posts);
          });
        }
      });
    });
  });
};
